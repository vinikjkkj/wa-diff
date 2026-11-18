__d(
  "WAWebVoipCallTransferEntryPointStore",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebEventEmitter",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$CallTransferEntryPointStore$p_1 = new Map()),
            (e.$CallTransferEntryPointStore$p_2 = []),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.applyChange = function (t) {
            var e = t.enabled,
              n = t.isVideoCall,
              r = t.peerActiveDeviceJid,
              o = t.peerWid,
              a = t.rootCallCreatorJid,
              i = t.rootCallId;
            if (!e) {
              this.remove(i, a);
              return;
            }
            var l = i + "|" + a;
            (this.$CallTransferEntryPointStore$p_1.delete(l),
              this.$CallTransferEntryPointStore$p_1.set(l, {
                rootCallId: i,
                rootCallCreatorJid: a,
                peerActiveDeviceJid: r,
                peerWid: o,
                isVideoCall: n,
              }),
              this.$CallTransferEntryPointStore$p_3());
          }),
          (i.remove = function (t, n) {
            this.$CallTransferEntryPointStore$p_1.delete(t + "|" + n) &&
              this.$CallTransferEntryPointStore$p_3();
          }),
          (i.$CallTransferEntryPointStore$p_3 = function () {
            ((this.$CallTransferEntryPointStore$p_2 = Array.from(
              this.$CallTransferEntryPointStore$p_1.values(),
            )),
              this.trigger("change"));
          }),
          (i.getEntryPoints = function () {
            return this.$CallTransferEntryPointStore$p_2;
          }),
          (i.getForChatId = function (t) {
            for (var e of this.$CallTransferEntryPointStore$p_1.values()) {
              var n;
              if (
                ((n = o(
                  "WAWebChatCollection",
                ).ChatCollection.getLatestChatForWid(e.peerWid)) == null
                  ? void 0
                  : n.id.equals(t)) === !0
              )
                return e;
            }
            return null;
          }),
          (i.getForRootCallId = function (t) {
            for (var e of this.$CallTransferEntryPointStore$p_1.values())
              if (e.rootCallId === t) return e;
            return null;
          }),
          (i.waitForEntryPoint = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var o = this,
                  a = this.$CallTransferEntryPointStore$p_2.at(-1);
                if (a != null) return a;
                var i = r("WAWebNoop"),
                  l;
                try {
                  return yield new (e || (e = n("Promise")))(function (e) {
                    ((i = function () {
                      var t = o.$CallTransferEntryPointStore$p_2.at(-1);
                      t != null && e(t);
                    }),
                      (l = self.setTimeout(function () {
                        return e(null);
                      }, t)),
                      o.on("change", i));
                  });
                } finally {
                  (self.clearTimeout(l), this.off("change", i));
                }
              },
            );
            function o(e) {
              return t.apply(this, arguments);
            }
            return o;
          })()),
          a
        );
      })(r("WAWebEventEmitter")),
      u = new s();
    l.WAWebVoipCallTransferEntryPointStore = u;
  },
  98,
);
