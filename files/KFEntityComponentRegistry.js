__d(
  "KFEntityComponentRegistry",
  [
    "KFChildrenComponent",
    "KFCompositingComponent",
    "KFEntity",
    "KFIdentificationComponent",
    "KFImageComponent",
    "KFRandomSubdocumentAlternateChildrenComponent",
    "KFRandomSubdocumentComponent",
    "KFSceneComponent",
    "KFShapeComponent",
    "KFTimeComponent",
    "KFTransformComponent",
    "KFTrimPathComponent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        IMAGE: r("KFImageComponent"),
        AUDIO: void 0,
        CHILDREN: r("KFChildrenComponent"),
        PARENT: void 0,
        COMPOSITING: r("KFCompositingComponent"),
        RANDOM_SUBDOCUMENT: r("KFRandomSubdocumentComponent"),
        RANDOM_SUBDOCUMENT_CHILDREN: r(
          "KFRandomSubdocumentAlternateChildrenComponent",
        ),
        ROOT: o("KFSceneComponent").KFRootComponent,
        SCENE: o("KFSceneComponent").KFSceneComponent,
        SHAPE: r("KFShapeComponent"),
        TRIM_PATH: r("KFTrimPathComponent"),
        TIME: r("KFTimeComponent"),
        IDENTIFICATION: r("KFIdentificationComponent"),
        TRANSFORM: r("KFTransformComponent"),
        VIDEO: void 0,
      },
      s = (function () {
        function t(t) {
          ((this.$1 = babelHelpers.extends({}, e, t)),
            (this.$2 = {}),
            (this.$3 = {}),
            (this.$4 = {}));
        }
        var n = t.prototype;
        return (
          (n.createEntity = function () {
            var e = new (r("KFEntity"))();
            return ((this.$2[e.id] = e), e);
          }),
          (n.getEntity = function (t) {
            return this.$2[t];
          }),
          (n.destroyEntity = function (t) {
            var e = Object.keys(this.$4[t.id] || {});
            delete this.$4[t.id];
            for (var n = e.length - 1; n >= 0; n--) {
              var r = this.$3[e[n]],
                o = r.indexOf(t);
              o !== -1 && r.splice(o, 1);
            }
          }),
          (n.createComponent = function (t) {
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            return this.$1[t] ? babelHelpers.construct(this.$1[t], n) : void 0;
          }),
          (n.addComponent = function (t, n) {
            for (
              var e = arguments.length, r = new Array(e > 2 ? e - 2 : 0), o = 2;
              o < e;
              o++
            )
              r[o - 2] = arguments[o];
            var a = this.createComponent.apply(this, [n].concat(r));
            return (this.registerComponentForEntity(t, a, n), a);
          }),
          (n.removeComponentForEntity = function (t, n) {
            var e = this.$3[n],
              r = e.indexOf(t);
            r !== -1 && e.splice(r, 1);
            var o = this.$4[t.id];
            o[n] != null && (o[n] = void 0);
          }),
          (n.registerComponentForEntity = function (t, n, r) {
            var e = r || n.toString();
            if (!this.$4[t.id]) this.$4[t.id] = {};
            else if (this.$4[t.id][e]) return this.$4[t.id][e];
            ((this.$4[t.id][e] = n),
              this.$3[r] || (this.$3[r] = []),
              this.$3[r].push(t));
          }),
          (n.getAllComponentsForEntity = function (t) {
            return this.$4[t.id] || {};
          }),
          (n.getComponent = function (t, n) {
            return this.$4[t.id][n];
          }),
          (n.getEntitiesWithComponent = function (t) {
            return this.$3[t] || [];
          }),
          (n.setComponentType = function (t, n) {
            this.$1[t] = n;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
