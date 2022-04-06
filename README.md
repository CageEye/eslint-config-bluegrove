# eslint-config-bluegrove 

[ESLint](http://eslint.org/) config for @Bluegrove

## How to use it

First, install the npm package:

```bash
npm install --save-dev eslint-config-bluegrove
```

Then add the `extends` option to your `.eslintrc`:

```json
{
    "extends": "bluegrove"
}
```

## Publishing

```bash
$ npm version <patch | minor | major>
$ git push --follow-tags origin master
$ npm publish
```