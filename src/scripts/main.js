/* Nityan Polymers — site behaviour */
(function () {
  "use strict";

  // ---- Business settings -------------------------------------------------
  var WHATSAPP_NUMBER = "919118985119";
  var BUSINESS_EMAIL = "sales@nityanpolymers.com";
  // Paste a form-service URL here (e.g. Formspree "https://formspree.io/f/xxxx")
  // to deliver enquiries straight to the inbox. Left empty, the form opens the
  // buyer's email app with the enquiry pre-filled.
  var FORM_ENDPOINT = "";

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  // ---- Header shadow on scroll -------------------------------------------
  var header = $(".header");
  function onScroll() { if (header) header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Page loader on internal navigation -------------------------------
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (a.target && a.target !== "_self") return;
    if (a.hasAttribute("download") || a.origin !== location.origin) return;
    if (a.pathname === location.pathname && a.search === location.search) return; // same page / hash links
    e.preventDefault();
    document.documentElement.classList.remove("is-loaded");
    document.documentElement.classList.add("is-leaving");
    setTimeout(function () { location.href = a.href; }, 260);
  });

  // ---- Mobile drawer -------------------------------------------------------
  var root = document.documentElement;
  function setNav(open) {
    root.classList.toggle("nav-open", open);
    var b = $(".burger");
    if (b) b.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }
  $$("[data-nav-open]").forEach(function (el) { el.addEventListener("click", function () { setNav(true); }); });
  $$("[data-nav-close], .drawer a").forEach(function (el) { el.addEventListener("click", function () { setNav(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

  // ---- Media slots: show real photo/video once the file exists ------------
  $$(".media").forEach(function (slot) {
    $$("img", slot).forEach(function (img) {
      function ok() { slot.classList.add("is-filled"); }
      function fail() { img.remove(); }
      if (img.complete) { img.naturalWidth > 0 ? ok() : fail(); }
      else { img.addEventListener("load", ok); img.addEventListener("error", fail); }
    });
    $$("video", slot).forEach(function (video) {
      var src = $("source", video);
      function ok() { slot.classList.add("is-filled"); }
      function fail() { video.remove(); }
      if (video.readyState >= 2) ok();
      else if (video.networkState === 3) fail();
      else {
        video.addEventListener("loadeddata", ok);
        if (src) src.addEventListener("error", fail);
        video.addEventListener("error", fail);
      }
    });
  });

  // ---- WhatsApp links ------------------------------------------------------
  function waLink(text) {
    return "https://wa.me/" + WHATSAPP_NUMBER + (text ? "?text=" + encodeURIComponent(text) : "");
  }
  $$("[data-wa]").forEach(function (a) {
    var msg = a.getAttribute("data-wa") || "Hello Nityan Polymers, I would like to enquire about your recycled plastic materials.";
    a.href = waLink(msg);
    a.target = "_blank";
    a.rel = "noopener";
  });

  // ---- Reveal on scroll ----------------------------------------------------
  var reveals = $$(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  }

  // ---- Product sub-navigation active state --------------------------------
  var subLinks = $$(".subnav a");
  if (subLinks.length && "IntersectionObserver" in window) {
    var map = {};
    subLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var so = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          subLinks.forEach(function (a) { a.classList.remove("is-active"); });
          var link = map[en.target.id];
          link.classList.add("is-active");
          link.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$(".product[id]").forEach(function (s) { so.observe(s); });
  }

  // ---- Enquiry form --------------------------------------------------------
  var form = $("#enquiry-form");
  if (!form) return;
  var card = form.closest(".form-card");
  var productSel = form.elements.product;
  // Colour options per product come from src/data/products.ts (rendered into data-colours)
  var COLOURS = JSON.parse(form.getAttribute("data-colours") || "{}");
  var colourSel = form.elements.colour;

  function fillColours(selected) {
    var list = COLOURS[productSel.value] || ["Natural", "White", "Black", "Blue", "Other"];
    colourSel.innerHTML = "";
    var first = document.createElement("option");
    first.value = ""; first.textContent = "Select colour";
    colourSel.appendChild(first);
    list.forEach(function (c) {
      var o = document.createElement("option");
      o.value = c; o.textContent = c;
      colourSel.appendChild(o);
    });
    if (list.length === 1) colourSel.value = list[0];
    if (selected && list.indexOf(selected) > -1) colourSel.value = selected;
  }
  productSel.addEventListener("change", function () { fillColours(); });

  // Prefill the product (and colour) the buyer came from
  var params = new URLSearchParams(window.location.search);
  if (params.get("product") && $('option[value="' + params.get("product") + '"]', productSel)) {
    productSel.value = params.get("product");
  }
  fillColours(params.get("colour"));

  function fieldData() {
    var d = {};
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.type === "submit" || el.type === "checkbox") return;
      if (el.tagName === "SELECT") d[el.name] = el.value ? el.options[el.selectedIndex].text : "";
      else d[el.name] = el.value.trim();
    });
    return d;
  }

  function summary(d) {
    return [
      "Name: " + d.name,
      "Company: " + (d.company || "-"),
      "Phone / WhatsApp: " + d.phone,
      "Email: " + (d.email || "-"),
      "Product: " + d.product,
      "Colour: " + (d.colour || "-"),
      "Quantity: " + (d.quantity ? d.quantity + " " + d.unit : "-"),
      "Application: " + (d.application || "-"),
      "Delivery city / PIN: " + (d.location || "-"),
      "",
      "Message:",
      d.message || "-"
    ].join("\n");
  }

  function validate() {
    var okAll = true;
    $$("[required]", form).forEach(function (el) {
      var f = el.closest(".field");
      var ok = el.type === "checkbox" ? el.checked : el.value.trim() !== "";
      if (ok && el.type === "email" && el.value) ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
      if (ok && el.name === "phone") ok = el.value.replace(/\D/g, "").length >= 10;
      if (f) f.classList.toggle("has-error", !ok);
      if (!ok && okAll) { el.focus(); okAll = false; }
    });
    return okAll;
  }

  $$("input, select, textarea", form).forEach(function (el) {
    el.addEventListener("input", function () { var f = el.closest(".field"); if (f) f.classList.remove("has-error"); });
  });

  function showSent(viaEmailApp) {
    var note = $("[data-sent-note]", card);
    if (note && viaEmailApp) {
      note.textContent = "Your email app has opened with the enquiry filled in — please press Send. You can also send it on WhatsApp below.";
    }
    card.classList.add("is-sent");
    card.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  var lastSummary = "";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.elements._gotcha && form.elements._gotcha.value) return; // bot trap
    if (!validate()) return;
    var d = fieldData();
    lastSummary = summary(d);
    var subject = "Enquiry: " + d.product + (d.company ? " — " + d.company : "");
    var btn = $("button[type=submit]", form);

    if (FORM_ENDPOINT) {
      btn.disabled = true; btn.textContent = "Sending…";
      var body = new FormData(form);
      body.append("_subject", subject);
      fetch(FORM_ENDPOINT, { method: "POST", body: body, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(); showSent(false); form.reset(); })
        .catch(function () { alert("Sorry, the enquiry could not be sent. Please try WhatsApp or email " + BUSINESS_EMAIL + "."); })
        .finally(function () { btn.disabled = false; btn.textContent = "Send Enquiry"; });
    } else {
      window.location.href = "mailto:" + BUSINESS_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lastSummary);
      showSent(true);
    }
  });

  $$("[data-wa-form]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var text = "Hello Nityan Polymers, I would like a quote.\n\n" + (lastSummary || summary(fieldData()));
      window.open(waLink(text), "_blank", "noopener");
    });
  });

  var again = $("[data-form-again]");
  if (again) again.addEventListener("click", function () { card.classList.remove("is-sent"); });
})();
