__d(
  "WAWebBizAIPaymentInstructionsDraft",
  [],
  function (t, n, r, o, a, i) {
    var e = {
      authoritativeInstructions: null,
      draft: null,
      isSaving: !1,
      resetEpoch: 0,
      saveFailed: !1,
      saved: null,
    };
    function l() {
      var t = e,
        n = new Set(),
        r = function (r) {
          ((t = babelHelpers.extends({}, t, r)),
            n.forEach(function (e) {
              return e();
            }));
        };
      return {
        beginSave: function () {
          return t.isSaving ? !1 : (r({ isSaving: !0, saveFailed: !1 }), !0);
        },
        get: function () {
          return t;
        },
        reconcile: function (n) {
          var e,
            o =
              ((e = t.saved) == null ? void 0 : e.forInstructions) === n
                ? t.saved
                : null;
          (t.authoritativeInstructions !== n || t.saved !== o) &&
            r({ authoritativeInstructions: n, saved: o });
        },
        reset: function () {
          t.isSaving || r(e);
        },
        set: r,
        subscribe: function (t) {
          return (
            n.add(t),
            function () {
              n.delete(t);
            }
          );
        },
      };
    }
    i.createPaymentInstructionsDraftHolder = l;
  },
  66,
);
