var units = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second'];
var locales = ['en-US', 'en-GB', 'he-IL', 'de-DE', 'fr-FR', 'ja-JP', 'zh-CN', 'ar-SA', 'es-ES'];
var relativeStyle = ['long', 'short', 'narrow'];
var numerUnitDisplay = ['long', 'short', 'narrow', 'compact'];
var dateTimeStyle = ['full', 'long', 'medium', 'short'];


// var _relativeTimeFormatOptions = {
//     localeMatcher: 'best fit',
//     //style: 'long',
//     numeric: 'always',
//     unitDisplay: 'compact'
// }
// for (const locale of locales) {
//     for (const style of relativeStyle) {
//         for (const unitDisplay of numerUnitDisplay) {
//             const formatter = new Intl.RelativeTimeFormat(locale, { ..._relativeTimeFormatOptions, style: style });
//             console.log(locale, style, unitDisplay, formatter.formatToParts(2, 'year'));
//         }
//     }
// }

var _dateTimeFormatOptions = {
    localeMatcher: 'best fit',
    //weekday?: 'narrow' | 'short' | 'long';
    //era?: 'narrow' | 'short' | 'long';
    //year: 'numeric',
    //month: 'numeric',
    //day: 'numeric',
    //hour: 'numeric',
    //minute: 'numeric',
    //second: 'numeric',
    //timeZoneName?: 'short' | 'long' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric';
    //formatMatcher?: 'basic' | 'best fit';
    //hour12?: boolean;
    //timeZone?: string; // IANA time zone, e.g., "UTC", "America/New_York"

    // Date-Time Component options
    //dateStyle?: 'full' | 'long' | 'medium' | 'short';
    //timeStyle?: 'full' | 'long' | 'medium' | 'short';
    //calendar?: string; // e.g., "gregory", "chinese"
    //dayPeriod?: 'narrow' | 'short' | 'long';
    //numberingSystem?: "latn" | "arab" | "hebr" | "beng" | "khmr" | "jpan" | "han" | "thai" | "lana" | "taml" | "telu" | "knda" | "gujr" | "oric" | "mlym" | "tibt" | "cyrl" | "armn" | "phon" | "math" | "fullwide" | "narrow";
    //fractionalSecondDigits?: number;
}
for (const locale of locales) {
    for (const style of dateTimeStyle) {
        const formatter = new Intl.DateTimeFormat(locale, { ..._dateTimeFormatOptions, style: style, dateStyle: 'long', timeStyle: 'long' });
        console.log(locale, style, formatter.formatToParts(new Date()));
    }
}
