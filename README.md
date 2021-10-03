# Test Parcel

Test de Parcel : un bundler qui se vend comme un outil sans configuration.

## Etapes

1. Module JS Simple
2. Ajout d'un fichier de template & SCSS + Babel
3. Un peu de TypeScript
4. Appel d'API (https://random-data-api.com/api/name/random_name)
5. Build pour production

## Conclusion

Pour le moment, je n'ai pas réussi à produire une bibliothèque ES6 fonctionnelle à partir de `notify.module.ts`.
Après le build, j'ai des erreurs au niveau de `<script type="module" src="../../dist/notify.module.js"></script>`
(`export default` absent ou `parceRequire` non déclaré).  
Peut-être qu'une configuration supplémentaire de Babel pourrait aider.  
  
Il semblerait que la V2 [règle ce problème](https://github.com/parcel-bundler/parcel/issues/1401#issuecomment-541409113), mais elle est, pour le moment, à l'état de release candidate. 