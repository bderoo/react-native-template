# Recommendations
As far as the organization of the theme I like most of what I see. I personally prefer to have the various shades of the same color organized inside an object instead of writing the number in the property name, e.g.:
```JS
{
  grey: {
    50: 'rgb(246,246,246)',
    200: 'rgb(219,219,219)',
  }
}
```
I think it's more elegant to access the color as `Colors.grey[50]` but it is very personal.

I would add a mini guide on how to add custom fonts to the project as well in the case where the client uses protected fonts that need to be added to the platforms.