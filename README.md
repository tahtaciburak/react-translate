
react-translate is a super simple i18n utility to make your apps global easily. react-translate is just a method that is encapsulated with a module. all you need to do, create your language files (like `tr.js` or `en,js`) then import your language files Translate.js, now you are ready to use translation anywhere in your app. detailed explaination given below. 

## Creating Language Files
First, you must create files that contains keys and values associated with your application. `tr.js` or `en,js` may be your skeleton, then populate your keys and their values with different languages.

### Subkeys
This function provides a subkey system to make your language files simpler. You can categorize your keys then use it seamlessly in your app. Here is an example.
```json
animals:{
  mammals:{
    human: "Insan",
  }
}
another_context:{
  human: "Insanlik"
}
```

### Extras
Sometimes you need to add other strings into your translation. For example "Your app downloaded [1532] times". It's so simple with this method. You can use `%s` anywhere in your translations.

```json
downlodas:"Your app downloaded %s times."
```

## Usage in React

To use react-translate you must import `Translate.js` to your react component. Usage of this module shown below.

```javascript
import Translate from './Translate';

<p>Translate.translate("key")</p>
<p>Translate.translate("key.subkey.subsubkey")</p>
<p>Translate.translate("key.extra",["extra1","extra2"])</p>
```


