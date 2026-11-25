__d(
  "WAWebVoipCallTransferEntryPointStore",
  ["WAWebChatCollection", "WAWebEventEmitter", "WAWebNoop"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.$CallTransferEntryPointStore$p_1 = new Map()),
            (e.$CallTransferEntryPointStore$p_2 = []),
            (e.$CallTransferEntryPointStore$p_3 = new Map()),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.applyChange = function (t) {
            var e = t.callId,
              n = t.enabled,
              r = t.isVideoCall,
              o = t.peerActiveDeviceJid,
              a = t.peerWid,
              i = t.rootCallCreatorJid,
              l = t.rootCallId,
              s = {
                rootCallId: l,
                rootCallCreatorJid: i,
                peerActiveDeviceJid: o,
                peerWid: a,
                isVideoCall: r,
              };
            if ((this.$CallTransferEntryPointStore$p_4(e, s), !n)) {
              this.remove(l, i);
              return;
            }
            var u = l + "|" + i;
            (this.$CallTransferEntryPointStore$p_1.delete(u),
              this.$CallTransferEntryPointStore$p_1.set(u, s),
              this.$CallTransferEntryPointStore$p_5());
          }),
          (a.$CallTransferEntryPointStore$p_4 = function (n, r) {
            if (
              !(n == null || n === "") &&
              (this.$CallTransferEntryPointStore$p_3.delete(n),
              this.$CallTransferEntryPointStore$p_3.set(n, r),
              this.$CallTransferEntryPointStore$p_3.size > e)
            ) {
              var t = this.$CallTransferEntryPointStore$p_3.keys().next().value;
              t != null && this.$CallTransferEntryPointStore$p_3.delete(t);
            }
          }),
          (a.getForSegmentCallId = function (t) {
            return this.$CallTransferEntryPointStore$p_3.get(t);
          }),
          (a.remove = function (t, n) {
            this.$CallTransferEntryPointStore$p_1.delete(t + "|" + n) &&
              this.$CallTransferEntryPointStore$p_5();
          }),
          (a.$CallTransferEntryPointStore$p_5 = function () {
            ((this.$CallTransferEntryPointStore$p_2 = Array.from(
              this.$CallTransferEntryPointStore$p_1.values(),
            )),
              this.trigger("change"));
          }),
          (a.getEntryPoints = function () {
            return this.$CallTransferEntryPointStore$p_2;
          }),
          (a.getForChatId = function (t) {
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
          (a.getForRootCallId = function (t) {
            for (var e of this.$CallTransferEntryPointStore$p_1.values())
              if (e.rootCallId === t) return e;
            return null;
          }),
          (a.waitForEntryPoint = async function (t) {
            var e = this,
              n = this.$CallTransferEntryPointStore$p_2.at(-1);
            if (n != null) return n;
            var o = r("WAWebNoop"),
              a;
            try {
              return await new Promise(function (n) {
                ((o = function () {
                  var t = e.$CallTransferEntryPointStore$p_2.at(-1);
                  t != null && n(t);
                }),
                  (a = self.setTimeout(function () {
                    return n(null);
                  }, t)),
                  e.on("change", o));
              });
            } finally {
              (self.clearTimeout(a), this.off("change", o));
            }
          }),
          n
        );
      })(r("WAWebEventEmitter")),
      u = new s();
    l.WAWebVoipCallTransferEntryPointStore = u;
  },
  98,
);
