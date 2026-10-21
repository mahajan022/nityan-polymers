import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** True when a file exists in /public (paths like "/images/site/hero.jpg"). Checked at build time. */
export const hasPublicFile = (path?: string) => !!path && existsSync(join(process.cwd(), 'public', path));
