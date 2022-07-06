# People-API
Generates fake user JSON objects that can be pushed into a database or whatever. None of this is intended to be accurate, just quick-and-dirty database filler scripts. That said, I'd like to call a few things out (read on).

## Random First & Last Name
I grabbed the top 100 men's first names (1980 census), women's first names (1980 census), and surnames (2010 census) as a data pool. The results are very Eurocentric, an issue that I acknowledge and resolve to diversify in a future version.

## Random Gender
A quick search at the time of this writing showed that 1.2 million Americans (out of 329.5 million total) identified as a non-binary in terms of gender. That's about 0.364% of the population. A separate search showed that women made up 50.52 percent of the US population (and 49.48% men). Obviously, those numbers don't square perfectly, but I felt that was good enough for me to use for generating fake people.

This tool randomly assigns a gender to fake users during generation by grabbing a pseudorandom number between 1-364.

- A result of **1-182** sets the gender to "woman"
- A result of **183-363** sets the gender to "man"
- A result of **364** sets the gender to "other"

### Q&A

**Why not "male" and "female?"**
Those are *sexes*, not genders. The better question would be "why do employers need that information at all?"

**How do I remove the "other" option?**
Modify the code. If you can't figure it out, consider modifying your level of tolerance for other people.

**Why is it "pseudorandom?"**
Because that's what Javascript is capable of doing. Truly random numbers are hard, and I'd need to learn a lot more math to mess with it. *Pseudorandom* is more than sufficient for what I've done here.

**How do I make the percentages more accurate?**
No idea. I'm not a statistician, I'm a frontend developer who wanted to load a database with a bunch of fake users so I could do UI things.

## Random Company Name
These are combinations of words I dumped into arrays. If one of them strikes you as amusing and you use it to name your company, buy me a beer when you turn a profit. Or don't. Free to use. Any similarities to actual companies is purely coincidental.