import { Metadata, CountryCallingCode, CountryCode, NumberFound, PhoneNumber } from 'libphonenumber-js';

export function parsePhoneNumber(text: string, metadata: Metadata): PhoneNumber;
export function parsePhoneNumber(text: string, defaultCountry: CountryCode, metadata: Metadata): PhoneNumber;

export function parsePhoneNumberFromString(text: string, metadata: Metadata): PhoneNumber;
export function parsePhoneNumberFromString(text: string, defaultCountry: CountryCode, metadata: Metadata): PhoneNumber;

export class ParseError {
  message: string;
}

export function findNumbers(text: string, metadata: Metadata): NumberFound[];
export function findNumbers(text: string, options: CountryCode | { defaultCountry?: CountryCode }, metadata: Metadata): NumberFound[];

export function searchNumbers(text: string, metadata: Metadata): IterableIterator<NumberFound>;
export function searchNumbers(text: string, options: CountryCode | { defaultCountry?: CountryCode }, metadata: Metadata): IterableIterator<NumberFound>;

export class PhoneNumberMatcher {
  constructor(text: string, metadata: Metadata);
  constructor(text: string, options: { defaultCountry?: CountryCode }, metadata: Metadata);
  hasNext(): boolean;
  next(): NumberFound;
}

export function getCountryCallingCode(countryCode: CountryCode, metadata: Metadata): CountryCallingCode;
export function getExtPrefix(countryCode: CountryCode, metadata: Metadata): string;

export function getExampleNumber(country: CountryCode, examples: object, metadata: Metadata): PhoneNumber;

export function formatIncompletePhoneNumber(number: string, metadata: Metadata): string;
export function formatIncompletePhoneNumber(number: string, countryCode: CountryCode, metadata: Metadata): string;
export function parseIncompletePhoneNumber(text: string): string;
export function parsePhoneNumberCharacter(character: string): string;
export function parseDigits(character: string): string;

export class AsYouType {
  constructor(defaultCountryCode: CountryCode, metadata: Metadata);
  input(text: string): string;
  reset(): void;
  country: CountryCode;
  getNumber(): PhoneNumber;
  getNationalNumber(): string;
  template: string;
}