/*
1. Semantic: article, header, footer, aside, h3, strong, b
Non-semantic: div, section, span

Correction: sections are semantic
All content tags except div and span are semantic in HTML5. Avoid using <b> and <i> for styling alone.

2. article

In some contexts, section or aside may work better

3. Neither - <blockquote> doesn't work since there is a header inside 

Correction: it's an extended quotation, so it can be wrapped in <blockquote> (even the title h1), but since it also stands well by itself in this context, the blockquote should be wrapped in an <article>

4. <section>, since it appears to be a part of a larger text and doesn't make sense by itself.

5. <aside> since it provides optional context
*/