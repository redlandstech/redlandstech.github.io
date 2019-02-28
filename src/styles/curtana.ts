import {Theme} from './theme'

export default (theme: Theme) => `
// Curtana for Almace Scaffolding | © Tunghsiao Liu | MIT

:root {
  // Typography
  --fontstack-prefix: -apple-system, BlinkMacSystemFont,; // Notice that ending comma?
  --fontstack-sans-serif: "Helvetica Neue", sans-serif;
  --fontstack-serif: Georgia, serif;
  --fontstack-monospace: Menlo, Consolas, monospace;
  --fontstack-default: var(--fontstack-prefix) var(--fontstack-sans-serif);
  --font-size: 24px;
  --font-features: "halt", "ss01", "ss02";
  --line-height: calc(20 / 14); // ~ 1.428571429
  --heading-letter-spacing: -.04em;

  // Layout
  --breakpoint-lg: ${theme.breakpointLg};
  --breakpoint-md: ${theme.breakpointMd};
  --breakpoint-sm: ${theme.breakpointSm};
  --breakpoint-xs: ${theme.breakpointXs};

  --space-lg: 24vw;
  --space-md: 8vw;
  --space-sm: 4vw;
  --space-xs: 1.2vw;

  --border-lg: 4px;
  --border-md: 2px;
  --border-sm: 1px;

  // Colors
  --link-color: ${theme.linkColor};
  --background-color: ${theme.backgroundColor};
  --text-color: ${theme.textColor};
  --code-color: ${theme.codeColor};

  // Nav
  --nav-padding: .75vmax;
  --nav-item-space: 1.4vmax;
}

//
// Reset
// -----------------------------------------------------------------------------

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
  text-size-adjust: none;
  text-rendering: optimizelegibility;
  image-rendering: optimizequality;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // TODO: You have to speicify background color for <html> in order to
  //       make <-webkit-filter> work
  // Link: https://bugs.chromium.org/p/chromium/issues/detail?id=591015
  // Date: Mar 1, 2016, 5:41 PM
  background: var(--background-color);
}

body {
  --space-body: var(--space-lg);
  padding-top: 0;
  padding-bottom: 0;
  padding-left: var(--space-body);
  padding-right: var(--space-body);
  margin: 0 auto 0;
  font-family: var(--fontstack-default);
  font-size: var(--font-size);
  font-feature-settings: var(--font-features);
  line-height: var(--line-height);
  hanging-punctuation: first allow-end;
  color: var(--text-color);
  background: var(--background-color);
  // transition: all .2s ease;

  @media (max-width: ${theme.breakpointMd}) {
    --space-body: var(--space-md);
  }

  @media (max-width: ${theme.breakpointSm}) {
    --space-body: var(--space-sm);
  }

  @media (max-width: ${theme.breakpointXs}) {
  }
}

// Reset fonts for relevant elements
input,
button,
select,
textarea {
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

// Reset unusual Firefox-on-Android default style.
// See https://github.com/necolas/normalize.css/issues/214
button,
input,
select[multiple],
textarea {
  background-image: none;
}

// Reset common elements
a,
button {
  color: var(--text-color);
  text-decoration: none;
  transition: color .5s ease, border-color .5s ease, background .5s ease, opacity 1.5s ease;

  &:hover,
  &:focus {
    transition: color .1s ease, border-color .1s ease, background .1s ease, opacity .1s ease;
    text-decoration: underline;
  }

  &[disabled] {
    opacity: .4;
    cursor: not-allowed;
  }
}

button {
  appearance: none;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}

img,
hr {
  border: 0;
}

del {
  text-decoration: line-through;
}

::placeholder {
  color: var(--text-color);
  opacity: .2;
}

:focus::placeholder {
  color: var(--link-color);
}

//
// Common
// -----------------------------------------------------------------------------

// Main navigation
.navigation {
  padding-top: var(--nav-padding);
  padding-bottom: var(--nav-padding);
  margin-right: calc(var(--nav-item-space) * -1);
  margin-left: calc(var(--nav-item-space) * -1);
  font-size: 90%;
  font-weight: bold;
  display: flex;
  align-items: center;
  list-style: none;

  li {
    vertical-align: middle;
    display: inline-block;
    padding: 0.5em;

    a {
      display: block;

      &:hover,
      &:focus {
        color: var(--link-color);
        text-decoration: none;
      }

      img {
        display: block;
      }
    }
  }
}

// Currently activated page or category class
.current {

  a {
    color: var(--link-color);
  }
}

// Latest work link
body:hover .latest {
  color: var(--link-color) !important;
}

// Main content
.content {
  margin-bottom: 16vmin;

  // For some specified posts in work category
  &::before,
  &::after {
    display: table;
    content: "";
  }

  &::after {
    clear: both;
  }

  // Remove extra space for the last paragraph in the container
  article {

    // article > p
    > *:last-child {
      margin-bottom: 0 !important;

      // article > ul > li, article > .footnotes > ol
      > *:last-child {
        margin-bottom: 0 !important;

        // article > ul > li > p, article > .footnotes > ol > li
        > *:last-child {
          margin-bottom: 0 !important;

          // article > .footnotes > ol > li > p
          > *:last-child {
            margin-bottom: 0 !important;
          }
        }
      }
    }
  }

  // Post / page content first element fix
  .post-content,
  .page-content {

    > *:first-child {
      margin-top: 0;

      > *:first-child {
        margin-top: 0;
      }
    }
  }

  a {
    font-weight: bold;

    // TODO: Fixes wrong underline color for inline <code> within <a> links.
    // However no browser supports this feature at the time of writing.
    // More info: https://caniuse.com/#feat=css-has
    // Date: Dec 10, 2016, 5:59 PM
    &:has(> code) {
      text-decoration-color: var(--code-color);
    }
  }

  p {
    margin-bottom: 1.6rem;
    line-height: calc(var(--line-height) * 1.2);
  }

  header {
    --header-height: 80vh;
    --space-header: var(--space-lg);
    display: flex;
    min-height: calc(var(--header-height) - (var(--nav-padding) * 4) - (var(--nav-item-space) * 4) - (1ex * .9 * 2));

    // Additional padding for content inside <header> are higher than <header>
    // container
    padding-top: 10vmin;
    padding-bottom: 10vmin;
    margin-bottom: 16vmin;
    flex-direction: column;
    justify-content: center;
    background: rgba(${theme.textColor}, .02);

    padding-left: var(--space-header);
    padding-right: var(--space-header);

    margin-left: calc(var(--space-header) * -1);
    margin-right: calc(var(--space-header) * -1);


    @media (max-width: ${theme.breakpointMd}) {
      --header-height: 70vh;
      --space-header: var(--space-md);
      padding-top: 16vmin;
      padding-bottom: 16vmin;
    }

    @media (max-width: ${theme.breakpointSm}) {
      --space-header: var(--space-sm);
    }

    h1 {
      font-size: 360%;
      font-weight: bold;
      letter-spacing: var(--heading-letter-spacing);

      // visual align left
      margin-left: -2px;
      hyphens: none;
      line-height: 1.1;

      @media (max-width: ${theme.breakpointSm}) {
        // Override viewport units defined in post.html
        font-size: 280%;
      }

      svg {}

      svg,
      img {
        // Normalize image size
        display: block;
        max-width: 100%;

        // Override margin from article img, avoid header stretched by global
        // img styles
        margin-left: 0;
        margin-right: 0;
        margin-bottom: .3em;

        @media (max-width: ${theme.breakpointSm}) {
          width: 100% !important;
          height: 100% !important;
        }
      }
    }

    // Reset subheading in page title (used by AMSF atm)
    h2 {
      margin: 1.2vmin 0 0;
    }

    // Hide actual text if post title is image or SVG, the actual text helps
    // Safari get the real post title in Reader mode.
    .image-title {
      text-indent: -999999px;
      line-height: 0;
    }

    small {
      display: block;
      margin-top: 2vmin;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10vmin 0 1rem;
    font-size: 72%;
    font-weight: normal;
    opacity: .5;
  }

  ul,
  ol {
    margin-bottom: 1.8rem;
    list-style: none;
    counter-reset: list;

    @media (max-width: ${theme.breakpointSm}) {
      margin-left: 1em;
    }

    li {
      line-height: calc(var(--line-height) * 1.2);

      &::before {
        position: absolute;
        display: flex;
        justify-content: flex-end;
        width: 4em;
        margin-top: 0;
        margin-left: -4em;
        text-align: right;
        opacity: .4;
        pointer-events: none;
      }

      > ul,
      > ol {
        margin-left: 1em;
        margin-bottom: 0;
      }
    }
  }

  ul li::before {
    content: "-";
    padding-right: .5em;
  }

  ol li::before {
    counter-increment: list;
    content: counter(list) ".";
    padding-right: .25em;
  }

  dl {
    line-height: calc(var(--line-height) * 1.2);

    @media (max-width: ${theme.breakpointSm}) {
      margin-left: 1em;
    }

    dt {

      &::before {
        position: absolute;
        width: 1em;
        margin-left: -1em;
        content: "-";
        opacity: .6;
        pointer-events: none;
      }
    }

    dd {
      margin-bottom: 1.8rem;
    }
  }

  header img {
    --space-deco: none;
  }

  img,
  video,
  iframe,
  .browser {
    --space-deco: var(--space-md);
    display: block;
    width: calc(100% + var(--space-deco) * 2);

    margin-left: calc(var(--space-deco) * -1);
    margin-right: calc(var(--space-deco) * -1);

    margin-bottom: 1.8rem;

    @media (max-width: ${theme.breakpointMd}) {
      --space-deco: var(--space-md);
    }

    @media (max-width: ${theme.breakpointSm}) {
      --space-deco: var(--space-sm);
    }

    // Avoid images with <.no-enlarge> stretched by global img styles
    &.size-fit,
    &.no-enlarge {
      margin-left: 0;
      margin-right: 0;
      max-width: 100%;
      width: auto;
    }

    // Full width image
    &.size-large {
      --space-deco: var(--space-lg);

      @media (max-width: ${theme.breakpointMd}) {
        --space-deco: var(--space-md);
      }

      @media (max-width: ${theme.breakpointSm}) {
        --space-deco: var(--space-sm);
      }
    }

    &.size-small {
      --space-deco: var(--space-xs);

      @media (max-width: ${theme.breakpointMd}) {
        --space-deco: var(--space-md);
      }

      @media (max-width: ${theme.breakpointSm}) {
        --space-deco: var(--space-sm);
      }
    }

    &.size-left {
      float: left;
      max-width: 36vw;
      margin-top: calc(var(--space-xs) / 2);
      margin-right: var(--space-xs);
      margin-bottom: calc(var(--space-xs) / 2);

      @media (max-width: ${theme.breakpointMd}) {
        float: none;
        max-width: none;
        margin-top: auto;
        margin-right: auto;
        margin-bottom: auto;
      }
    }

    &.size-right {
      float: right;
      max-width: 36vw;
      margin-top: calc(var(--space-xs) / 2);
      margin-left: var(--space-xs);
      margin-bottom: calc(var(--space-xs) / 2);

      @media (max-width: ${theme.breakpointMd}) {
        float: none;
        max-width: none;
        margin-top: auto;
        margin-left: auto;
        margin-bottom: auto;
      }
    }

    &.no-resize,
    &.noresize,
    &.size-original {
      width: unset;
      max-width: 100%;
      margin-left: unset;
      margin-right: unset;

      &.center {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }

  // Don't double negative indent blockquotes
  blockquote blockquote {
    margin-left: 0;
  }

  blockquote {
    position: relative;
    margin-bottom: 2.8rem;
    margin-left: calc(var(--space-xs) * -1);
    font-size: 90%;

    @media (max-width: ${theme.breakpointSm}) {
      margin-left: 0;
    }

    > p {
      padding-left: var(--space-xs);
      border-left: var(--border-md) solid;

      // TODO: Need better solution
      // We will reset the common margin-bottom to get gapless borders for
      // blockquotes. This could help fix
      // https://github.com/amsf/amsf-curtana/issues/4
      padding-bottom: 1.6em;

      // Now reset default margin button from global define
      margin-bottom: 0;
      opacity: .6;

      // Remove extra padding for the last element, re-apply margin
      &:last-of-type {
        padding-bottom: 0;
        margin-bottom: .4em;
      }

      @media (max-width: ${theme.breakpointSm}) {
        padding-left: calc(var(--space-sm) - var(--border-md));
        padding-right: var(--space-sm);
        margin-left: calc(var(--space-sm) * -1);
        margin-right: calc(var(--space-sm) * -1);
      }
    }

    footer {
      &::before,
      &::after {
        display: table;
        content: "";
      }

      &::after {
        clear: both;
      }
    }

    cite {
      float: right;
      font-style: normal;

      &::before {
        // https://www.fileformat.info/info/unicode/char/2500/index.htm
        content: "\u2500\u2500\u00a0"
      }
    }
  }

  details {
    margin-bottom: 1.8rem;

    summary {
      position: relative;
      list-style: none;
      line-height: calc(var(--line-height) * 1.2);
      outline: none;
      cursor: pointer;

      @media (max-width: ${theme.breakpointSm}) {
        margin-left: 1em;
      }

      &::-webkit-details-marker {
        display: none
      }

      &::before {
        content: "+";
        position: absolute;
        display: flex;
        justify-content: center;
        width: 1ex;
        left: -.5em;
        margin-top: 0;
        margin-left: -1ex;
        text-align: right;
        opacity: .4;
        // transition: opacity .2s ease, transform .2s ease;
        // transform-origin: center center;
        font-feature-settings: "case";
      }
    }

    // TODO: SCSS generates wrong !important comment position when related
    // block are nested inside, you have to make sure the block you wanna keep
    // by uncss the topmost level (root) of your css. I already implemented a
    // workaround for <opentype-features> repo.
    &[open] summary::before {
      opacity: 1;
      transform: rotate(45deg);
    }
  }

  hr {
    &::before {
      display: block;
      content: '';
      width: 3px;
      height: 3px;
      margin: 2em auto;
      border-radius: 50%;
      background: var(--text-color);
      box-shadow: (3px * 8) 0 0 0 var(--text-color), (3px * -8) 0 0 0 var(--text-color);
    }
  }

  sup {
    font-size: 75%;
  }

  pre,
  code {
    font-family: var(--fontstack-monospace);
    color: var(--code-color);
  }

  pre {
    background: rgba(#08f, .04);
  }

  code {
    font-size: 92%;
    overflow-wrap: break-word;
  }

  pre,
  .highlight > pre,
  .highlighter-rouge pre.highlight {
    --space-code: var(--space-xs);
    padding-top: var(--space-xs);
    padding-bottom: var(--space-xs);
    padding-left: var(--space-code);
    padding-right: var(--space-code);

    margin-left: calc(var(--space-code) * -1);
    margin-right: calc(var(--space-code) * -1);

    margin-bottom: 1.8rem;
    overflow-x: auto;
    font-size: 80%;
    line-height: calc(var(--line-height) * 1.2);

    // Bouncing scroll fix for iOS
    -webkit-overflow-scrolling: touch;

    @media (max-width: ${theme.breakpointMd}) {
      --space-code: var(--space-md);
    }

    @media (max-width: ${theme.breakpointSm}) {
      --space-code: var(--space-sm);
    }

    // Reset overflow for code in code blocks
    code {
      overflow-wrap: normal;
    }
  }

  // Newsletter subscription form in page "store"
  form {

    input {
      display: block;
      width: 100%;
      padding: 1vmin 0;
      margin: 0 0 1.8rem;
      border: none;
      border-bottom: 1px solid var(--text-color);

      // Remove border-radius for iOS devices
      border-radius: 0;
      outline: none;
      // transition: padding .2s ease;

      &:focus {
        border-color: var(--text-color);
      }
    }
  }

  // Rest form validation styles, borrowed from Bootstrap
  input,
  textarea,
  select {

    &:focus:required:invalid {

      &:focus {
        color: var(--link-color);
        border-color: var(--link-color);

        // Override Firefox default styles
        box-shadow: none;
      }
    }
  }

  table {
    --space-table: var(--space-xs);
    border-collapse: collapse;
    border-spacing: 0;
    font-size: 90%;
    width: 100%;

    margin-left: calc(var(--space-table) * -1);
    margin-right: calc(var(--space-table) * -1);
    margin-bottom: 1.8rem;

    // TODO: responsive table support
    // display: inline-block;
    // overflow-x: auto;
    // white-space: nowrap;

    // TODO: responsive table support
    @media (max-width: ${theme.breakpointMd}) {
      --space-table: var(--space-md);
      width: calc(100% + var(--space-table) * 2);
    }

    @media (max-width: ${theme.breakpointSm}) {
      --space-table: var(--space-sm);
      width: calc(100% + var(--space-table) * 2);
    }

    th,
    td {
      --space-table-cell: var(--space-xs);
      padding: .6em var(--space-xs);

      &:first-child {
        padding-left: var(--space-table-cell);
      }

      &:last-child {
        padding-right: var(--space-table-cell);
      }

      @media (max-width: ${theme.breakpointMd}) {
        --space-table-cell: var(--space-md);
      }

      @media (max-width: ${theme.breakpointSm}) {
        --space-table-cell: var(--space-sm);
      }
    }

    th {
      border-bottom: var(--border-md) solid rgba(${
        theme.textColor
      }, .06); // Override default user agent stylesheet
      text-align: left;
    }

    td {
      border-top: var(--border-sm) solid rgba(${theme.textColor}, .04);
    }
  }
}

// Posts with Asian characters
:lang(zh),
:lang(ja) {
  text-align: justify;

  header {

    &,
    & * {
      text-align: start;
    }
  }

  ruby {

    rt {
      text-align: start;
    }
  }
}

// Post date margin fix
.post-modified-date {
  font-size: 75%;
  opacity: .5;
}

// Largetype styles (replaces button styles)
.largetype {
  font-size: 360%;
  font-weight: bold;
  letter-spacing: var(--heading-letter-spacing);
  font-size: 200%;
  margin-bottom: 1.8rem !important;
}

// Broser frame for images in category "work"
.browser {
  position: relative;
  padding-top: 24px;
  background: rgba(255, 255, 255, .1);
  border-radius: 5px 5px 0 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .05);

  // Reset browser border-radius for small screens
  @media (max-width: ${theme.breakpointMd}), (max-width: ${theme.breakpointSm}) {
    border-radius: 0;
  }

  &::before {
    position: absolute;
    top: 8px;
    left: 10px;
    display: block;
    width: 8px;
    height: 8px;
    background: lighten(#f24e59, 30%);
    border-radius: 50%;
    content: "";
    box-shadow:
      16px 0 0 0   rgba(lighten(#fac536, 30%), .96),
      32px 0 0 0   rgba(lighten(#26e93d, 30%), .96),
         0 0 0 1px rgba(darken(#f24e59, 30%), .3),
      16px 0 0 1px rgba(darken(#fac536, 30%), .3),
      32px 0 0 1px rgba(darken(#26e93d, 30%), .3);
  }

  img {
    // avoid images inside .browser stretched by global img styles
    margin-left: 0;
    margin-right: 0;
    width: auto;
    max-width: 100%;
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, .05);
  }
}

// Extra offset for OS X screenshots
.screenshot-mac {
  --osx-shadow-size: 56px;

  margin-left: calc(var(--osx-shadow-size) * -1);
  margin-right: calc(var(--osx-shadow-size) * -1);

  @media (max-width: ${theme.breakpointMd}), (max-width: ${theme.breakpointSm}) {
    margin-left: 0;
    margin-right: 0;
  }
}

// Special paragraph with border line
.note,
.store,
.download {
  padding-left: var(--space-xs);
  margin-left: calc(var(--space-xs) * -1);
  border-left: var(--border-md) solid var(--link-color);

  @media (max-width: ${theme.breakpointSm}) {
    padding-left: calc(var(--space-sm) - var(--border-md));
    padding-right: var(--space-sm);

    margin-left: calc(var(--space-sm) * -1);
    margin-right: calc(var(--space-sm) * -1);
  }
}

// Reference notes and links in post
.footnotes {
  @include spliter();
  font-size: 80%;
}

:target {

  // Redcarpet-style
  [rev=footnote],
  [rel=footnote],

  // kramdown-style
  .reversefootnote,
  .footnote {
    color: var(--link-color);
  }
}

// Post list in "work" and "note"
.list {
  display: block;
  margin: 0 0 .4rem;

  h1 {
    font-size: 360%;
    font-weight: bold;
    letter-spacing: var(--heading-letter-spacing);
    font-size: 200%;
    line-height: 1.1;

    // Override heading defines in .content
    opacity: 1;
    margin: 0;

    @media (max-width: ${theme.breakpointSm}) {
      // Hide external link for post list
      font-size: 180%;
    }
  }

  .external {

    @media (max-width: ${theme.breakpointSm}) {
      // Hide external link for post list
      display: none;
    }
  }
}

// A dot symbol for external links
.external {

  .dot {
    display: inline-block;
    width: .7rem;
    height: .7rem;
    margin: 0 .1em;
    vertical-align: middle;
    background: var(--text-color);
    border-radius: 50%;
    // transition: transform .4s ease;

    // Extra margin for external symbol in singular
    &--post {
      margin-left: 1rem;
    }
  }

  &:hover,
  &:focus {

    .dot {
      transform: scale(1.4);
    }
  }
}

// OpenType features
.of-case {
  font-feature-settings: "case";
}

.footer {
  padding: 0 0 16vmin;
  margin-right: calc(var(--nav-item-space) * -1);
  margin-left: calc(var(--nav-item-space) * -1);
  font-size: 80%;
  text-transform: lowercase;

  ul {

    li {
      display: inline-block;
      line-height: 1.8;

      a {
        padding: .5em var(--nav-item-space);
      }
    }
  }
}

//
// Plugins
// -----------------------------------------------------------------------------

// GitHub Gist
.gist {
  font-size: 80% !important;

  code, pre {
    padding: 0;
    color: inherit;
    background-color: transparent;
  }

  .gist-data {
    font-family: var(--fontstack-monospace) !important;

    .file-data {
      font-size: 100% !important;

      > table {
        margin-bottom: 0 !important;
      }
    }
  }

  // Monospace fonts look bigger than normal fonts, so make it smaller.
  .highlight {
    font-size: 90% !important;
  }

  .markdown-body {
    font-size: 100% !important;
    padding: 1em !important;
  }
}

//
// Print
// -----------------------------------------------------------------------------

// Style fixes for priting

@media print {

  *,
  *::before,
  *::after {
    background: transparent !important;
    color: #000 !important;

    // Black prints faster: h5bp.com/s
    box-shadow: none !important;
    text-shadow: none !important;
  }

  body {
    padding: 10mm !important;
    margin: 0 !important;
  }

  a,
  a:visited {
    text-decoration: none;
  }

  .content header {
    min-height: 0;
    padding-bottom: 0;
  }

  .content .post-content,
  .content .page-content {
    max-width: 100% !important;

    a[href]::after {
      content: " (" attr(href) ")";
      font-weight: normal;
      opacity: .5;
    }

    // Don't show links that are fragment identifiers,
    // or use the <javascript:> pseudo protocol
    a[href^="#"]::after,
    a[href^="javascript:"]::after {
      content: "";
    }
    abbr[title]::after {
      content: " (" attr(title) ")";
      font-weight: normal;
    }
  }
  pre,
  blockquote {
    page-break-inside: avoid;
  }
  thead {
    display: table-header-group;
  }
  tr,
  img {
    page-break-inside: avoid;
  }
  img {
    max-width: 100% !important;
  }
  p,
  h2,
  h3,
  h4,
  h5,
  h6 {
    orphans: 3;
    widows: 3;
  }
  h2,
  h3 {
    page-break-after: avoid;
  }
  .navigation,
  .footer {
    display: none;
  }
}
`
