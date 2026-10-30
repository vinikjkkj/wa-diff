__d(
  "WAWebHatchCvmSecretPref",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "WAHatchCvmSecret",
      d = r("JSResourceForInteraction")("WAWebHatchCvmKey").__setRef(
        "WAWebHatchCvmSecretPref",
      ),
      m = "WAHatchCvmVmTransferring",
      p = new Set();
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield d.load(),
            r = n.importCvmAccountSecret,
            a = yield r(e.secret);
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var i = x(e.ownerLid),
            l = Math.max(
              ((t = i == null ? void 0 : i.generation) != null ? t : 0) + 1,
              o("WATimeUtils").unixTimeMs(),
            );
          return (
            yield P({
              generation: l,
              ownerLid: o("WAWebWidToJid").userLidtoLidUserJid(e.ownerLid),
              secret: a,
              vmType: i == null ? void 0 : i.vmType,
            }),
            l
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var t = x(e.ownerLid);
          (t == null ? void 0 : t.secret) == null ||
            t.generation !== e.generation ||
            (yield P(babelHelpers.extends({}, t, { secret: null })));
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
              yield (u || (u = n("Promise"))).all([
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(c),
                o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(m),
              ]));
          } catch (e) {
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-cvm: CVM state not cleared",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("hatch-cvm-clear-failed");
            return;
          }
          O();
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            ((n = x(e)) == null ? void 0 : n.vmType) !== t && (yield $(e, t)));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, r;
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var a = e.ownerLid,
            i = e.status,
            l = (t = (r = x(a)) == null ? void 0 : r.vmType) != null ? t : null,
            s = i.vmState === "TRANSFERRING",
            c = A(a),
            d = F({ current: l, status: i, transferEnded: c && !s }),
            m = d === l ? null : $(a, d),
            p = s === c ? null : M({ ownerLid: a, transferring: s });
          yield (u || (u = n("Promise"))).all([m, p]);
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init();
          var t = x(e);
          return (t == null ? void 0 : t.secret) == null || t.generation == null
            ? null
            : { generation: t.generation, key: t.secret };
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          return (
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.init(),
            (t = (n = x(e)) == null ? void 0 : n.vmType) != null ? t : null
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      var t = x(e);
      return {
        hasSecret: (t == null ? void 0 : t.secret) != null,
        isConfidential: (t == null ? void 0 : t.vmType) === "confidential",
        isTransferring: A(e),
      };
    }
    function D(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function x(e) {
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(c);
      return (t == null ? void 0 : t.ownerLid) ===
        o("WAWebWidToJid").userLidtoLidUserJid(e)
        ? t
        : null;
    }
    function $(e, t) {
      var n = x(e);
      return P({
        generation: n == null ? void 0 : n.generation,
        ownerLid: o("WAWebWidToJid").userLidtoLidUserJid(e),
        secret: n == null ? void 0 : n.secret,
        vmType: t,
      });
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(c, e),
            O());
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.ownerLid,
            n = e.transferring;
          (yield n
            ? o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                m,
                o("WAWebWidToJid").userLidtoLidUserJid(t),
              )
            : o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(m),
            O());
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return (
        o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(m) ===
        o("WAWebWidToJid").userLidtoLidUserJid(e)
      );
    }
    function F(e) {
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
    function O() {
      for (var t of Array.from(p))
        try {
          t();
        } catch (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: secret change listener failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("hatch-cvm-secret-listener-failed");
        }
    }
    ((l.saveHatchCvmSecret = _),
      (l.removeHatchCvmSecret = g),
      (l.clearHatchCvmState = y),
      (l.saveHatchCvmVmType = b),
      (l.applyHatchCvmLinkedStatus = S),
      (l.readHatchCvmSecret = L),
      (l.readHatchCvmVmType = k),
      (l.peekHatchCvmReadOnlyInputs = T),
      (l.subscribeToHatchCvmSecretChanges = D));
  },
  98,
);
