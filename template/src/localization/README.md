# Recommendations
The only recommendation I would give on the current set up of the localization would be to move the `StringObjType` to a separate file because it looks a little bit odd to import such type from the english localization file. Might be a good type to be moved to the typings file.

Another thing that I think might be interesting, would be to try to replicate the logic implemented by Dani in the react template where the properties of the localization files are actually the strings in english. The advantage of such approach would be that when you search for a certain string in english you will immediately find the files that use it without having to pass through the references of the localization files e.g.:
```
{
  "Error": "Error",
  "Warning": "Warning",
  "Info": "Info",
  "Success": "Success",
  "Error 404": "Error 404",
  "We couldn't find what you were looking for. If you whish you can <a>Go Home</a>": "We couldn't find what you were looking for. If you whish you can <a>Go Home</a>",
  ...
}
```