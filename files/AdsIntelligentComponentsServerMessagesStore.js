__d(
  "AdsIntelligentComponentsServerMessagesStore",
  [
    "AHGLogUtils",
    "AdsAccountStore",
    "AdsDataAtom",
    "AdsIntelligentComponentServerContextTypes",
    "AdsIntelligentComponentsDataDispatcher",
    "AdsIntelligentComponentsMessageContentStore",
    "AdsIntelligentComponentsMessagesLoadErrorActionFlux",
    "AdsIntelligentComponentsMessagesLoadedActionFlux",
    "FluxLoadObjectStore",
    "clearTimeout",
    "requestIdleCallback",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e3,
      u = 5,
      c = 0,
      d = null,
      m = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.reduce = function (n, a) {
            var t = this,
              i = a.action;
            switch (i.type) {
              case o("AdsIntelligentComponentsMessagesLoadedActionFlux")
                .actionType:
                (r("clearTimeout")(d),
                  (c = 0),
                  (e || (e = r("AdsDataAtom"))).waitFor([
                    r(
                      "AdsIntelligentComponentsMessageContentStore",
                    ).getDispatchToken(),
                  ]));
                var l = i.loadedData;
                if (l && l.messages && l.messages.aymt_tips) {
                  var m = l.messages.aymt_tips;
                  o("AHGLogUtils").logAYMTTipsLoaded(Object.keys(m));
                }
                return this.__handleOne(
                  n,
                  this.$AdsIntelligentComponentsServerMessagesStore$p_1(
                    i.params,
                  ),
                  l,
                );
              case o("AdsIntelligentComponentsMessagesLoadErrorActionFlux")
                .actionType:
                return (
                  r("clearTimeout")(d),
                  c < u
                    ? ((d = r("setTimeout")(
                        function () {
                          t.__load(
                            t.$AdsIntelligentComponentsServerMessagesStore$p_1(
                              i.params,
                            ),
                          );
                        },
                        Math.pow(2, c++) * s,
                      )),
                      n)
                    : this.__handleOne(
                        n,
                        this.$AdsIntelligentComponentsServerMessagesStore$p_1(
                          i.params,
                        ),
                        i.error,
                      )
                );
              default:
                return n;
            }
          }),
          (a.__load = function (t) {
            var e = this.$AdsIntelligentComponentsServerMessagesStore$p_2(t),
              n = r("AdsAccountStore").getSelectedAccount().getValue();
            o("AdsIntelligentComponentsDataDispatcher").loadMessages(e, n);
          }),
          (a.__queueLoadAll = function (n) {
            var e = this;
            r("requestIdleCallback")(function () {
              t.prototype.__queueLoadAll.call(e, n);
            });
          }),
          (a.getMessages = function (t) {
            var e = this.get(
              this.$AdsIntelligentComponentsServerMessagesStore$p_1(t),
            );
            return e.getValue();
          }),
          (a.$AdsIntelligentComponentsServerMessagesStore$p_1 = function (t) {
            var e = babelHelpers.extends({}, t);
            return (
              t.context && (e.context = t.context.toJSON()),
              JSON.stringify(e)
            );
          }),
          (a.$AdsIntelligentComponentsServerMessagesStore$p_2 = function (t) {
            var e = JSON.parse(t);
            return (
              e.context &&
                (e.context = o(
                  "AdsIntelligentComponentServerContextTypes",
                ).AdsIntelligentComponentServerContextRecordFactory(e.context)),
              e
            );
          }),
          n
        );
      })(r("FluxLoadObjectStore"));
    m.__moduleID = i.id;
    var p = new m(e || (e = r("AdsDataAtom")));
    l.default = p;
  },
  98,
);
