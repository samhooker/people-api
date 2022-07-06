# People-API
Generates fake user JSON objects that can be pushed into a database or whatever. None of this is intended to be accurate, just quick-and-dirty database filler scripts. That said, I'd like to call a few things out (read on).

## Random First & Last Name
I grabbed the top 100 men's first names (1980 census), women's first names (1980 census), and surnames (2010 census) as a data pool. The results are very Eurocentric, an issue that I acknowledge and resolve to diversify in a future version.

## Random Gender
A quick search at the time of this writing showed that 1.2 million Americans (out of 329.5 million total) identified as non-binary. That's about 0.364% of the population. A separate search showed that women made up 50.52 percent of the US population (and 49.48% men). Obviously, those numbers don't square perfectly, but I felt that was good enough for me to use for generating fake people.

End result: there's a 1 in 364 chance that a generated user's gender will be "other." Otherwise, there's an almost insignificantly higher chance of it being "woman" over "man."

I'm not a statistician. I don't care to be more accurate than that. I'm generating minimal fake data to do UI things.

## Random Company Name
These are combinations of words I picked out of the blue. If one of them strikes you as amusing and you use it to name your company, buy me a beer when you turn a profit. Or don't. Free to use. Any similarities to actual companies is purely coincidental.
