__d(
  "WAWebUnifiedResponseUtils",
  ["WAWebBotUnifiedResponseGating", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891428050, "1412"),
      s = (function () {
        function t() {
          this.$1 = o(
            "WAWebBotUnifiedResponseGating",
          ).isUnifiedResponseQPLLoggingEnabled();
        }
        var n = t.prototype;
        return (
          (n.markerStart = function (n) {
            !this.$1 ||
              e == null ||
              o("WAWebQplFlowWrapper").QPL.markerStart(e, { annotations: n });
          }),
          (n.markerEnd = function (n) {
            !this.$1 ||
              e == null ||
              o("WAWebQplFlowWrapper").QPL.markerEnd(e, n);
          }),
          (n.markerPoint = function (n) {
            !this.$1 ||
              e == null ||
              o("WAWebQplFlowWrapper").QPL.markerPoint(e, n);
          }),
          t
        );
      })();
    function u(e) {
      return e.primitive ? [e.primitive] : e.primitives ? e.primitives : [];
    }
    function c(e) {
      var t = e.unifiedResponse;
      return t == null
        ? !1
        : d(t) ||
            o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(
              e.t,
            );
    }
    function d(e) {
      return (
        m(e) &&
        o(
          "WAWebBotUnifiedResponseGating",
        ).isUnifiedResponseImagineReceiverEnabled()
      );
    }
    function m(e) {
      if (e == null) return !1;
      var t = !1;
      for (var n of e.sections) {
        var r = u(n.view_model);
        for (var o of r)
          if (o.__typename === "GenAIImaginePrimitive") t = !0;
          else if (o.__typename === "GenAIMarkdownTextUXPrimitive") {
            if (o.inline_entities && o.inline_entities.length > 0) return !1;
          } else return !1;
      }
      return t;
    }
    ((l.UnifiedResponseQPLLogger = s),
      (l.isUnifiedResponseVisible = c),
      (l.shouldShowImagineUnifiedResponse = d),
      (l.isImagineResponse = m));
  },
  98,
);
