/**
 * Verification script for custom weekday abbreviations.
 * This script checks that all custom abbreviations are distinct and shows statistics.
 * 
 * Run with: node scripts/verify_custom_weekday_abbrevs.js
 */

import { customWeekdayAbbreviations } from '../src/custom_weekday_abbrevs.js';

// Verification: Check that all abbreviations are distinct
function verifyDistinct(locale, abbrevs) {
    const set = new Set(abbrevs);
    if (set.size !== 7) {
        console.error(`❌ ${locale}: Not distinct! ${abbrevs.join(', ')}`);
        return false;
    }
    console.log(`✓ ${locale}: ${abbrevs.join(', ')}`);
    return true;
}

console.log('=== VERIFYING CUSTOM ABBREVIATIONS ===\n');
let allValid = true;
for (const [locale, abbrevs] of Object.entries(customWeekdayAbbreviations)) {
    if (!verifyDistinct(locale, abbrevs)) {
        allValid = false;
    }
}

console.log(`\n${allValid ? '✓ All custom abbreviations are distinct!' : '❌ Some abbreviations have duplicates'}`);

// Show length statistics
console.log('\n=== LENGTH STATISTICS ===\n');
for (const [locale, abbrevs] of Object.entries(customWeekdayAbbreviations)) {
    const lengths = abbrevs.map(a => Array.from(a).length);
    const min = Math.min(...lengths);
    const max = Math.max(...lengths);
    const avg = (lengths.reduce((a, b) => a + b, 0) / lengths.length).toFixed(1);
    console.log(`${locale.padEnd(8)} min:${min} max:${max} avg:${avg}`);
}

// Exit with error code if validation failed
if (!allValid) {
    process.exit(1);
}
