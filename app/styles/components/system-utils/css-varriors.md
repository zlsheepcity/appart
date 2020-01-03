# CSS Varriors

https://zlsheepcity.github.io/appart/projects/css-varriors.html

It's about CSS & Markup.

Sometimes we need to add custom value without any hurt to current design system. Inline styling isn't a good solution.

If only we always could add .my-custom-class …
But it's not.


## Features

• Memorable logic with CSS property names.
• The markup remains safe for reuse.
• The designer remains calm.


------------------------------------
## Usage
------------------------------------

### Option 0: Append default value

```html
<div class="opacity">
    ...
</div>
```

### Option 1: Single target

```html
<div class="opacity" style="--opacity:0.56;">
    ...
</div>
```

### Option 2: Multi targets

```html
<section style="--opacity: 0.56;">
    <div class="opacity">...</div>
    <div class="opacity">...</div>
</section>
```

------------------------------------
## Maintenance
------------------------------------

Compilation shortcuts
```bash

scss -C --sourcemap=none app/styles/components/system-utils/css-varriors.scss app/styles/components/system-utils/css-varriors-compiled.css

sass --no-source-map app/styles/components/system-utils/css-varriors.scss app/styles/components/system-utils/css-varriors-compiled.css

```
