__d(
  "KFContext",
  [
    "KFAssetRegistry",
    "KFComponentNames",
    "KFDimensions",
    "KFEntityComponentRegistry",
    "KFLoader",
    "KFOpacitySystem",
    "KFRAFEngine",
    "KFRandomSubdocumentSystem",
    "KFRenderSystem",
    "KFSceneComponent",
    "KFShapeSystem",
    "KFTimeSystem",
    "KFTransformSystem",
    "KFTrimPathSystem",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["preUpdate", "update", "preRender", "render", "postRender"],
      s = (function () {
        function t(e, t) {
          ((this.$2 = new (r("KFAssetRegistry"))()),
            (this.$3 = e),
            (this.$4 = document.createElement("div")),
            (this.$5 = new (r("KFEntityComponentRegistry"))()),
            (this.$6 = t != null ? t : new (r("KFRAFEngine"))()),
            (this.$7 = {
              __priority: {
                preUpdate: [],
                update: [],
                preRender: [],
                render: [],
                postRender: [],
              },
            }));
        }
        var a = t.prototype;
        return (
          (a.boot = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = new Uint8Array(e);
                t != null
                  ? yield t(n, this.$5, this.$2)
                  : yield r("KFLoader")(n, this.$5, this.$2);
                var a = this.$5.getComponent(
                  this.$5.getEntitiesWithComponent(
                    o("KFComponentNames").ROOT,
                  )[0],
                  o("KFComponentNames").SCENE,
                );
                a &&
                  (a.onEnd(this.$6.stop.bind(this.$6)),
                  (this.$4.style.position = "relative"),
                  (this.$4.style.display = "inline-block"),
                  (this.$4.style.boxSizing = "border-box"),
                  (this.$4.style.padding = "0"),
                  (this.$4.style.margin = "0"),
                  this.$6.registerCallback(this.$8.bind(this)),
                  this.$6.start(),
                  this.$9(),
                  this.$10());
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$8 = function (n, r) {
            var t, o, a;
            for (t = 0; t < e.length; t++)
              for (a = this.$7.__priority[e[t]], o = 0; o < a.length; o++)
                a[o].update(n, r);
          }),
          (a.$9 = function () {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            if (e) {
              (this.addSystem(new (r("KFTimeSystem"))(this.$5), "preUpdate"),
                this.addSystem(
                  new (r("KFRandomSubdocumentSystem"))(this.$5, e),
                  "preUpdate",
                ),
                this.addSystem(new (r("KFShapeSystem"))(this.$5), "update"),
                this.addSystem(new (r("KFTrimPathSystem"))(this.$5), "update"),
                this.addSystem(new (r("KFOpacitySystem"))(this.$5), "update"),
                this.addSystem(
                  new (r("KFTransformSystem"))(this.$5),
                  "preRender",
                ));
              var t = e.getSize();
              ((this.$1 = t
                ? new (r("KFDimensions"))(t.width, t.height)
                : new (r("KFDimensions"))(500, 500)),
                this.addSystem(
                  new (r("KFRenderSystem"))(this.$5, this.$4, this.$2, this.$1),
                  "render",
                ));
            }
          }),
          (a.addSystem = function (t, n) {
            (n === void 0 && (n = "update"),
              (this.$7[t.toString()] = t),
              this.$7.__priority[n].push(t));
          }),
          (a.onUpdate = function (t) {
            this.$6.registerCallback(t);
          }),
          (a.$10 = function (t) {
            (t && (this.$3 = t), this.$3 && this.$3.appendChild(this.$4));
          }),
          (a.getLayer = function (t) {
            return this.$5.getEntity(t);
          }),
          (a.getEngine = function () {
            return this.$6;
          }),
          (a.getSystem = function (t) {
            return this.$7[t];
          }),
          (a.getElement = function () {
            return this.$4;
          }),
          (a.getDuration = function () {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return e ? e.getDuration() : 0;
          }),
          (a.getFrameRate = function () {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return e ? e.getFrameRate() : 60;
          }),
          (a.onError = function (t) {
            return this;
          }),
          (a.onRepeatEnd = function (t) {
            return (t && this.$11().onRepeat(t), this);
          }),
          (a.onProgress = function (t) {
            return (t && this.$11().onUpdate(t), this);
          }),
          (a.repeatCount = function (t) {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return (e && e.setPlayCount(t), this);
          }),
          (a.resetPlayCount = function () {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return (e && e.resetPlayCount(), this);
          }),
          (a.setWidth = function (t) {
            return (this.$1 && this.$1.setWidth(t), this);
          }),
          (a.setHeight = function (t) {
            return (this.$1 && this.$1.setHeight(t), this);
          }),
          (a.seekToProgress = function (t) {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return (e && e.seekToProgress(t), this);
          }),
          (a.mute = function () {
            return this;
          }),
          (a.unMute = function () {
            return this;
          }),
          (a.play = function () {
            return (this.$6.start(), this);
          }),
          (a.pause = function () {
            return (this.$6.stop(), this);
          }),
          (a.resetDimensions = function () {
            return this;
          }),
          (a.setStartAndEndAt = function (t, n) {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return (e && e.setStartAndEndProgress(t, n), this);
          }),
          (a.setStartAt = function (t) {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return (e && e.setStartProgress(t), this);
          }),
          (a.setEndAt = function (t) {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return (e && e.setEndProgress(t), this);
          }),
          (a.redrawIfNeeded = function () {
            return this;
          }),
          (a.$11 = function () {
            var e = this.$5.getComponent(
              this.$5.getEntitiesWithComponent(o("KFComponentNames").ROOT)[0],
              o("KFComponentNames").SCENE,
            );
            return (
              e ||
              new (o("KFSceneComponent").KFSceneComponent)([], 0, 0, [0, 0])
            );
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
