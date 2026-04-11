__d(
  "WAWebWamStorage",
  [
    "WALogger",
    "WAWebWAWCStorage",
    "WAWebWamConstants",
    "WAWebWamUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = yield r("WAWebWAWCStorage").idb();
          return a.wam
            .add({ key: e, buffer: n, channel: t }, e)
            .catch(function (e) {
              o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose(
                    ["add failed: ", "\n", ""],
                    ["add failed: ", "\\n", ""],
                  )),
                e,
                e == null ? void 0 : e.stack,
              );
            });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = 0;
          try {
            a = yield r("WAWebWAWCStorage")
              .idb()
              .then(function (r) {
                return r.wam.update(e, { key: e, buffer: n, channel: t });
              });
          } catch (e) {
            var i = r("getErrorSafe")(e);
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose(
                  ["update failed: ", "\n", ""],
                  ["update failed: ", "\\n", ""],
                )),
              i,
              i.stack,
            );
          }
          return a !== 0;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = {};
          try {
            yield r("WAWebWAWCStorage")
              .idb()
              .then(function (n) {
                return n.wam
                  .where("channel")
                  .equals(e)
                  .modify(function (e, n) {
                    ((t[e.key] = e.buffer), delete n.value);
                  });
              });
          } catch (e) {
            var n = r("getErrorSafe")(e);
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose(
                  ["deleteAll failed: ", "\n", ""],
                  ["deleteAll failed: ", "\\n", ""],
                )),
              n,
              n.stack,
            );
          }
          return t;
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = -1,
            a = 65536;
          try {
            var i = yield r("WAWebWAWCStorage").idb();
            yield i.transaction(
              "rw",
              ["wam_meta"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                var n = yield i.wam_meta.where("streamId").equals(e).count();
                n === 0
                  ? (yield i.wam_meta.add({ streamId: e, seqNum: 1 }), (t = 1))
                  : yield i.wam_meta
                      .where("streamId")
                      .equals(e)
                      .modify(function (e) {
                        return (
                          (t = e.seqNum + 1),
                          t >= a && (t = 1),
                          (e.seqNum = t),
                          e
                        );
                      });
              }),
            );
          } catch (e) {
            var l = r("getErrorSafe")(e);
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose(
                  ["getNextSequenceNumberForStream failed: ", "\n", ""],
                  ["getNextSequenceNumberForStream failed: ", "\\n", ""],
                )),
              l,
              l.stack,
            );
          }
          if (t === -1)
            throw (
              r("gkx")("26258") ||
                o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[wam] getNextSequenceNumberForStream failed",
                      ])),
                  )
                  .sendLogs("getNextSequenceNumberForStreamFailed"),
              r("err")("could not get seq number for streamId " + e)
            );
          return t;
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (e) {
          return e.ps_meta.bulkDelete(t);
        })
        .catch(function (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose(
                ["removePsMeta failed: ", "\n", ""],
                ["removePsMeta failed: ", "\\n", ""],
              )),
            t,
            t == null ? void 0 : t.stack,
          );
        });
    }
    function T() {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (e) {
          return e.ps_meta.toArray();
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose(
                  ["getPsMeta failed: ", "\n", ""],
                  ["getPsMeta failed: ", "\\n", ""],
                )),
              e,
              e == null ? void 0 : e.stack,
            ),
            []
          );
        });
    }
    function D(e) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (t) {
          return t.ps_meta.bulkPut(e);
        })
        .catch(function (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose(
                ["addPsMeta failed: ", "\n", ""],
                ["addPsMeta failed: ", "\\n", ""],
              )),
            e,
            e == null ? void 0 : e.stack,
          );
        });
    }
    function x(e) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (t) {
          return t.ps_meta.update(e.key, e);
        })
        .catch(function (e) {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose(
                ["updatePsMeta failed: ", "\n", ""],
                ["updatePsMeta failed: ", "\\n", ""],
              )),
            e,
            e == null ? void 0 : e.stack,
          );
        });
    }
    function $() {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (e) {
          return e.ps_tokens.get("token");
        })
        .catch(function (e) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose(
                ["getPsToken failed: ", "\n", ""],
                ["getPsToken failed: ", "\\n", ""],
              )),
            e,
            e == null ? void 0 : e.stack,
          );
        });
    }
    function P(e) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (t) {
          return t.transaction("rw", ["ps_tokens"], function () {
            return t.ps_tokens.put(e);
          });
        })
        .catch(function (e) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose(
                ["savePsToken failed: ", "\n", ""],
                ["savePsToken failed: ", "\\n", ""],
              )),
            e,
            e == null ? void 0 : e.stack,
          );
        });
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield r("WAWebWAWCStorage").idb();
          return n.transaction(
            "rw",
            ["core_wam", "core_wam_meta"],
            function () {
              return n.core_wam.put(t).then(function () {
                return n.core_wam_meta.put(e);
              });
            },
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebWAWCStorage").idb();
          return t.core_wam
            .where("streamId")
            .equals(e)
            .modify({ finished: !0 });
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebWAWCStorage").idb();
          return t.core_wam_meta.get({ streamId: e });
        })),
        O.apply(this, arguments)
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebWAWCStorage").idb();
          return e.core_wam.toArray();
        })),
        W.apply(this, arguments)
      );
    }
    function q() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebWAWCStorage").idb();
          return e.transaction(
            "rw",
            ["core_wam", "core_wam_meta"],
            function () {
              return e.core_wam.clear().then(function () {
                return e.core_wam_meta.clear();
              });
            },
          );
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebWAWCStorage").idb();
          return t.core_wam.delete(e);
        })),
        H.apply(this, arguments)
      );
    }
    function G(e) {
      return z.apply(this, arguments);
    }
    function z() {
      return (
        (z = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebWAWCStorage").idb();
          return t.transaction("rw", ["worker_wam_events"], function () {
            return t.worker_wam_events.put(e);
          });
        })),
        z.apply(this, arguments)
      );
    }
    function j() {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield r("WAWebWAWCStorage").idb();
          try {
            yield e.transaction(
              "rw",
              ["worker_wam_events"],
              n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                yield e.worker_wam_events
                  .limit(o("WAWebWamConstants").WAM_WORKER_DATA_BATCH_SIZE)
                  .modify(function (e, t) {
                    (o("WAWebWamUtils").processWorkerWamDataRow(e),
                      delete t.value);
                  });
              }),
            );
            var t = yield e.worker_wam_events.count();
            return t > 0;
          } catch (e) {
            var a = r("getErrorSafe")(e);
            return (
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose(
                    ["processWorkerWamData failed: ", "\n", ""],
                    ["processWorkerWamData failed: ", "\\n", ""],
                  )),
                a,
                a.stack,
              ),
              !1
            );
          }
        })),
        K.apply(this, arguments)
      );
    }
    var Q = {
        add: C,
        update: v,
        deleteAll: R,
        getNextSequenceNumberForStream: E,
        addCoreWamBuffer: N,
        finishAllCoreWamBuffers: w,
        getCoreWamStartingSequenceNumber: F,
        getAllCoreWamBuffers: B,
        nukeAllCoreWamBuffers: q,
        removeWamBufferByKey: V,
        storeWorkerWamData: G,
        processWorkerWamData: j,
        removePsMeta: I,
        getPsMeta: T,
        addPsMeta: D,
        updatePsMeta: x,
        getPsToken: $,
        savePsToken: P,
      },
      X = Q;
    l.default = X;
  },
  98,
);
