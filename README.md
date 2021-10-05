# Test Parcel

Test de Parcel : un bundler qui se vend comme un outil sans configuration.

## Etapes

1. Module JS Simple
2. Ajout d'un fichier de template & SCSS + Babel
3. Un peu de TypeScript
4. Appel d'API (https://random-data-api.com/api/name/random_name)
5. Build sous forme de bibliothèque et test dans une page HTML

## Conclusion

Pour le moment, je n'ai pas réussi à produire une bibliothèque ES6 fonctionnelle à partir de `notify.module.ts`.
Après le build, j'ai des erreurs au niveau de `<script type="module" src="../../dist/notify.module.js"></script>`
(`export default` absent ou `parceRequire` non déclaré).  
Peut-être qu'une configuration supplémentaire de Babel pourrait aider.  
  
Il semblerait que la V2 [règle ce problème](https://github.com/parcel-bundler/parcel/issues/1401#issuecomment-541409113), mais elle est, pour le moment, à l'état de release candidate. 

## Test en V2

L'étape 5 peut être réalisée en Parcel V2 (actuellement en release candidate le jour où j'écris ces lignes).  
Pour cela, il faut ajouter des éléments de configuration dans `package.json` pour build une bibliothèque JS : 

```
  "source": "src/step5/notify/notify.module.ts",
  "module": "dist/step5/module.js",
  "main": false
```

- `source` pour le point d'entrée de la bibliothèque
- `module` pour le fichier module qui sera build
- `main` pour générer un module CommonJS

Pour éviter la génération d'un module CommonJs, il faut ajouter la configuration suivante : 
```
  "targets": {
    "main": false
  }
```

L'import de fichier HTML est différent dans cette nouvelle version. Pour avoir un comportement similaire, il faut modifier l'import de la vue HTML : 
```
import view from 'bundle-text:./view.html'
```