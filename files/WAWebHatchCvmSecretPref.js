__d(
  "WAWebHatchCvmSecretPref",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "WAHatchCvmSecret",
      c = r("JSResourceForInteraction")("WAWebHatchCvmKey").__setRef(
        "WAWebHatchCvmSecretPref",
      ),
      d = "WAHatchCvmVmTransferring",
      m = new Set();
    async function p(e) {
      var t,
        n = await c.load(),
        r = n.importCvmAccountSecret,
        a = await r(e.secret);
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
      var i = E(e.ownerLid),
        l = Math.max(
          ((t = i == null ? void 0 : i.generation) != null ? t : 0) + 1,
          o("WATimeUtils").unixTimeMs(),
        );
      return (
        await I({
          generation: l,
          ownerLid: o("WAWebWidToJid").userLidtoLidUserJid(e.ownerLid),
          secret: a,
          vmType: i == null ? void 0 : i.vmType,
        }),
        l
      );
    }
    async function _(e) {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
      var t = E(e.ownerLid);
      (t == null ? void 0 : t.secret) == null ||
        t.generation !== e.generation ||
        (await I(babelHelpers.extends({}, t, { secret: null })));
    }
    async function f() {
      try {
        if (
          (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(), !R())
        )
          return;
        await Promise.all([
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(u),
          o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(d),
        ]);
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: CVM state not cleared",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-cvm-clear-failed");
        return;
      }
      $();
    }
    async function g(e, t) {
      var n;
      (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
        ((n = E(e)) == null ? void 0 : n.vmType) !== t && (await k(e, t)));
    }
    async function h(e) {
      var t, n;
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
      var r = e.ownerLid,
        a = e.status,
        i = (t = (n = E(r)) == null ? void 0 : n.vmType) != null ? t : null,
        l = a.vmState === "TRANSFERRING",
        s = D(r),
        u = x({ current: i, status: a, transferEnded: s && !l }),
        c = u === i ? null : k(r, u),
        d = l === s ? null : T({ ownerLid: r, transferring: l });
      await Promise.all([c, d]);
    }
    async function y() {
      await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
      var e = L();
      return (e == null ? void 0 : e.secret) == null || e.generation == null
        ? null
        : { generation: e.generation, key: e.secret };
    }
    async function C() {
      var e, t;
      return (
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
        (e = (t = L()) == null ? void 0 : t.vmType) != null ? e : null
      );
    }
    function b() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser(),
        t = e == null ? null : E(e);
      return {
        hasSecret: (t == null ? void 0 : t.secret) != null,
        isConfidential: (t == null ? void 0 : t.vmType) === "confidential",
        isTransferring: e != null && D(e),
      };
    }
    function v() {
      var e, t;
      return (e = (t = L()) == null ? void 0 : t.vmType) != null ? e : null;
    }
    function S(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function R() {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u) != null ||
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(d) != null
      );
    }
    function L() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
      return e == null ? null : E(e);
    }
    function E(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(u);
      return (t == null ? void 0 : t.ownerLid) ===
        o("WAWebWidToJid").userLidtoLidUserJid(e)
        ? t
        : null;
    }
    function k(e, t) {
      var n = E(e);
      return I({
        generation: n == null ? void 0 : n.generation,
        ownerLid: o("WAWebWidToJid").userLidtoLidUserJid(e),
        secret: n == null ? void 0 : n.secret,
        vmType: t,
      });
    }
    async function I(e) {
      (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(u, e), $());
    }
    async function T(e) {
      var t = e.ownerLid,
        n = e.transferring;
      (await (n
        ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            d,
            o("WAWebWidToJid").userLidtoLidUserJid(t),
          )
        : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(d)),
        $());
    }
    function D(e) {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(d) ===
        o("WAWebWidToJid").userLidtoLidUserJid(e)
      );
    }
    function x(e) {
      var t = e.current,
        n = e.status,
        r = e.transferEnded;
      return n.isChannelAbsent === !0
        ? null
        : n.status !== "ACTIVE"
          ? t
          : n.vmType === "CVM"
            ? "confidential"
            : n.vmType === "SVM" && (r || t == null)
              ? "standard"
              : t;
    }
    function $() {
      for (var e of Array.from(m))
        try {
          e();
        } catch (e) {
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: secret change listener failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-cvm-secret-listener-failed");
        }
    }
    ((l.saveHatchCvmSecret = p),
      (l.removeHatchCvmSecret = _),
      (l.clearHatchCvmState = f),
      (l.saveHatchCvmVmType = g),
      (l.applyHatchCvmLinkedStatus = h),
      (l.readHatchCvmSecret = y),
      (l.readHatchCvmVmType = C),
      (l.peekHatchCvmReadOnlyInputs = b),
      (l.peekHatchCvmVmType = v),
      (l.subscribeToHatchCvmSecretChanges = S));
  },
  98,
);
