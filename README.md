# DirectLinks

Repackaged from Canisbos Computing's [DirectLinks Safari extension](http://canisbos.com/directlinks) (its source code is [here](https://github.com/canisbos/DirectLinks)).

## Packaging

[`extensionator`](https://github.com/Zensight/extensionator) may be used for packing the extension. You'll need a PEM key for packing. You may generate the key with `openssl` if you don't yet have one:

```bash
openssl genrsa 2048 | openssl pkcs8 -topk8 -nocrypt -out key.pem
```

Then,

```bash
gem install extensionator
extensionator --directory="source" --identity="key.pem" --output="dist/DirectLinks-$(git describe 2>/dev/null).crx"
```
