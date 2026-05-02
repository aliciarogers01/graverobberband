# Customization Guide

## Domain

The domain is set in `CNAME`:

```text
graverobberpunk.com
```

## Shows

Edit `shows.js` and add shows like this:

```js
{
  date: "2026-10-31",
  venue: "The Crypt",
  city: "Fort Wayne",
  state: "IN",
  time: "9:00 PM",
  ticketUrl: "https://example.com",
  details: "Halloween graveyard punk set"
}
```

## Signup form

Replace the iframe/link in `signup.html` with the band's Google Form, Mailchimp form, or booking/contact form.

## Images

Replace these files when real art is ready:

- `assets/logo.svg`
- `assets/band-placeholder.svg`
- `assets/favicon.svg`
