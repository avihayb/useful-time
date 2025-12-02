/**
 * Option structs for Intl.NumberFormat
 * Based on ECMAScript Internationalization API Specification
 */

/**
 * @typedef {Object} NumberFormatOptions
 * @property {'lookup' | 'best fit'} [localeMatcher]
 * @property {'decimal' | 'currency' | 'percent' | 'unit'} [style]
 * @property {string} [currency] - ISO 4217 currency code, e.g., "USD", "EUR"
 * @property {'standard' | 'accounting'} [currencySign]
 * @property {'symbol' | 'narrowSymbol' | 'code' | 'name'} [currencyDisplay]
 * @property {boolean | 'always' | 'auto' | 'min2'} [useGrouping]
 * @property {number} [minimumIntegerDigits]
 * @property {number} [minimumFractionDigits]
 * @property {number} [maximumFractionDigits]
 * @property {number} [minimumSignificantDigits]
 * @property {number} [maximumSignificantDigits]
 * @property {'short' | 'long'} [compactDisplay]
 * @property {'standard' | 'scientific' | 'engineering' | 'compact'} [notation]
 * @property {'auto' | 'never' | 'always' | 'exceptZero' | 'negative'} [signDisplay]
 * @property {"second" | "minute" | "hour" | "day" | "week" | "month" | "year"} [unit]
 * @property {'short' | 'long' | 'narrow'} [unitDisplay]
 * @property {'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven'} [roundingMode]
 * @property {'auto' | 'morePrecision' | 'lessPrecision'} [roundingPriority]
 * @property {number} [roundingIncrement]
 * @property {'auto' | 'stripIfInteger'} [trailingZeroDisplay]
 */
export class NumberFormatOptions { }

/**
 * Option structs for Intl.DateTimeFormat
 */

/**
 * @typedef {Object} DateTimeFormatOptions
 * @property {'lookup' | 'best fit'} [localeMatcher]
 * @property {'narrow' | 'short' | 'long'} [weekday]
 * @property {'narrow' | 'short' | 'long'} [era]
 * @property {'numeric' | '2-digit'} [year]
 * @property {'numeric' | '2-digit' | 'narrow' | 'short' | 'long'} [month]
 * @property {'numeric' | '2-digit'} [day]
 * @property {'numeric' | '2-digit'} [hour]
 * @property {'numeric' | '2-digit'} [minute]
 * @property {'numeric' | '2-digit'} [second]
 * @property {'short' | 'long' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric'} [timeZoneName]
 * @property {'basic' | 'best fit'} [formatMatcher]
 * @property {boolean} [hour12]
 * @property {string} [timeZone] - IANA time zone, e.g., "UTC", "America/New_York"
 * @property {'full' | 'long' | 'medium' | 'short'} [dateStyle]
 * @property {'full' | 'long' | 'medium' | 'short'} [timeStyle]
 * @property {string} [calendar] - e.g., "gregory", "chinese"
 * @property {'narrow' | 'short' | 'long'} [dayPeriod]
 * @property {"latn" | "arab" | "hebr" | "beng" | "khmr" | "jpan" | "han" | "thai" | "lana" | "taml" | "telu" | "knda" | "gujr" | "oric" | "mlym" | "tibt" | "cyrl" | "armn" | "phon" | "math" | "fullwide" | "narrow"} [numberingSystem]
 * @property {number} [fractionalSecondDigits]
 */
export class DateTimeFormatOptions { }

/**
 * Option structs for Intl.RelativeTimeFormat
 */

/**
 * @typedef {Object} RelativeTimeFormatOptions
 * @property {'lookup' | 'best fit'} [localeMatcher]
 * @property {'always' | 'auto'} [numeric]
 * @property {'long' | 'short' | 'narrow'} [style]
 * @property {'long' | 'short' | 'narrow' | 'compact'} [unitDisplay]
 */
export class RelativeTimeFormatOptions { }

/**
 * Option structs for Intl.DurationFormat
 * (Stage 4 Proposal / Recent Addition)
 */

/**
 * @typedef {Object} DurationFormatOptions
 * @property {'lookup' | 'best fit'} [localeMatcher]
 * @property {'long' | 'short' | 'narrow' | 'digital'} [style]
 * @property {'long' | 'short' | 'narrow'} [years]
 * @property {'always' | 'auto'} [yearsDisplay]
 * @property {'long' | 'short' | 'narrow'} [months]
 * @property {'always' | 'auto'} [monthsDisplay]
 * @property {'long' | 'short' | 'narrow'} [weeks]
 * @property {'always' | 'auto'} [weeksDisplay]
 * @property {'long' | 'short' | 'narrow'} [days]
 * @property {'always' | 'auto'} [daysDisplay]
 * @property {'long' | 'short' | 'narrow' | 'numeric' | '2-digit'} [hours]
 * @property {'always' | 'auto'} [hoursDisplay]
 * @property {'long' | 'short' | 'narrow' | 'numeric' | '2-digit'} [minutes]
 * @property {'always' | 'auto'} [minutesDisplay]
 * @property {'long' | 'short' | 'narrow' | 'numeric' | '2-digit'} [seconds]
 * @property {'always' | 'auto'} [secondsDisplay]
 * @property {'long' | 'short' | 'narrow' | 'numeric'} [milliseconds]
 * @property {'always' | 'auto'} [millisecondsDisplay]
 * @property {'long' | 'short' | 'narrow' | 'numeric'} [microseconds]
 * @property {'always' | 'auto'} [microsecondsDisplay]
 * @property {'long' | 'short' | 'narrow' | 'numeric'} [nanoseconds]
 * @property {'always' | 'auto'} [nanosecondsDisplay]
 * @property {number} [fractionalDigits]
 * @property {string} [numberingSystem]
 */
export class DurationFormatOptions { }
