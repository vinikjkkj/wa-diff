__d(
  "WAWebWamStorage",
  [
    "WALogger",
    "WAWebWAWCStorage",
    "WAWebWamConstants",
    "WAWebWamUtils",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t, n, a) {
      var i = await r("WAWebWAWCStorage").idb();
      return i.wam
        .add({ key: t, buffer: a, channel: n }, t)
        .catch(function (t) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "add failed: ",
                  `
`,
                  "",
                ],
                ["add failed: ", "\\n", ""],
              )),
            String(t),
            r("getErrorSafe")(t).stack,
          );
        });
    }
    async function b(e, t, n) {
      var a = 0;
      try {
        a = await r("WAWebWAWCStorage")
          .idb()
          .then(function (r) {
            return r.wam.update(e, { key: e, buffer: n, channel: t });
          });
      } catch (e) {
        var i = r("getErrorSafe")(e);
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose(
              [
                "update failed: ",
                `
`,
                "",
              ],
              ["update failed: ", "\\n", ""],
            )),
          i,
          i.stack,
        );
      }
      return a !== 0;
    }
    async function v(e) {
      var t = {};
      try {
        await r("WAWebWAWCStorage")
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
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose(
              [
                "deleteAll failed: ",
                `
`,
                "",
              ],
              ["deleteAll failed: ", "\\n", ""],
            )),
          n,
          n.stack,
        );
      }
      return t;
    }
    async function S(e) {
      var t = -1,
        n = 65536;
      try {
        var a = await r("WAWebWAWCStorage").idb();
        await a.transaction("rw", ["wam_meta"], async function () {
          var r = await a.wam_meta.where("streamId").equals(e).count();
          r === 0
            ? (await a.wam_meta.add({ streamId: e, seqNum: 1 }), (t = 1))
            : await a.wam_meta
                .where("streamId")
                .equals(e)
                .modify(function (e) {
                  return (
                    (t = e.seqNum + 1),
                    t >= n && (t = 1),
                    (e.seqNum = t),
                    e
                  );
                });
        });
      } catch (e) {
        var i = r("getErrorSafe")(e);
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose(
              [
                "getNextSequenceNumberForStream failed: ",
                `
`,
                "",
              ],
              ["getNextSequenceNumberForStream failed: ", "\\n", ""],
            )),
          i,
          i.stack,
        );
      }
      if (t === -1)
        throw (
          r("gkx")("26258") ||
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] getNextSequenceNumberForStream failed",
                  ])),
              )
              .sendLogs("getNextSequenceNumberForStreamFailed"),
          r("err")("could not get seq number for streamId " + e)
        );
      return t;
    }
    function R(e) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (t) {
          return t.ps_meta.bulkDelete(e);
        })
        .catch(function (e) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "removePsMeta failed: ",
                  `
`,
                  "",
                ],
                ["removePsMeta failed: ", "\\n", ""],
              )),
            String(e),
            r("getErrorSafe")(e).stack,
          );
        });
    }
    function L() {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (e) {
          return e.ps_meta.toArray();
        })
        .catch(function (e) {
          return (
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose(
                  [
                    "getPsMeta failed: ",
                    `
`,
                    "",
                  ],
                  ["getPsMeta failed: ", "\\n", ""],
                )),
              String(e),
              r("getErrorSafe")(e).stack,
            ),
            []
          );
        });
    }
    function E(e) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (t) {
          return t.ps_meta.bulkPut(e);
        })
        .catch(function (e) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "addPsMeta failed: ",
                  `
`,
                  "",
                ],
                ["addPsMeta failed: ", "\\n", ""],
              )),
            String(e),
            r("getErrorSafe")(e).stack,
          );
        });
    }
    function k(e) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (t) {
          return t.ps_meta.update(e.key, e);
        })
        .catch(function (e) {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "updatePsMeta failed: ",
                  `
`,
                  "",
                ],
                ["updatePsMeta failed: ", "\\n", ""],
              )),
            String(e),
            r("getErrorSafe")(e).stack,
          );
        });
    }
    function I() {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (e) {
          return e.ps_tokens.get("token");
        })
        .catch(function (e) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "getPsToken failed: ",
                  `
`,
                  "",
                ],
                ["getPsToken failed: ", "\\n", ""],
              )),
            String(e),
            r("getErrorSafe")(e).stack,
          );
        });
    }
    function T(e) {
      return r("WAWebWAWCStorage")
        .idb()
        .then(function (t) {
          return t.transaction("rw", ["ps_tokens"], function () {
            return t.ps_tokens.put(e);
          });
        })
        .catch(function (e) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "savePsToken failed: ",
                  `
`,
                  "",
                ],
                ["savePsToken failed: ", "\\n", ""],
              )),
            String(e),
            r("getErrorSafe")(e).stack,
          );
        });
    }
    async function D(e, t) {
      var n = await r("WAWebWAWCStorage").idb();
      return n.transaction("rw", ["core_wam", "core_wam_meta"], function () {
        return n.core_wam.put(t).then(function () {
          return n.core_wam_meta.put(e);
        });
      });
    }
    async function x(e) {
      var t = await r("WAWebWAWCStorage").idb();
      return t.core_wam.where("streamId").equals(e).modify({ finished: !0 });
    }
    async function $(e) {
      var t = await r("WAWebWAWCStorage").idb();
      return t.core_wam_meta.get({ streamId: e });
    }
    async function P() {
      var e = await r("WAWebWAWCStorage").idb();
      return e.core_wam.toArray();
    }
    async function N() {
      var e = await r("WAWebWAWCStorage").idb();
      return e.transaction("rw", ["core_wam", "core_wam_meta"], function () {
        return e.core_wam.clear().then(function () {
          return e.core_wam_meta.clear();
        });
      });
    }
    async function M(e) {
      var t = await r("WAWebWAWCStorage").idb();
      return t.core_wam.delete(e);
    }
    async function w(e) {
      var t = await r("WAWebWAWCStorage").idb();
      return t.transaction("rw", ["worker_wam_events"], function () {
        return t.worker_wam_events.put(e);
      });
    }
    async function A() {
      var e = await r("WAWebWAWCStorage").idb();
      try {
        await e.transaction("rw", ["worker_wam_events"], async function () {
          await e.worker_wam_events
            .limit(o("WAWebWamConstants").WAM_WORKER_DATA_BATCH_SIZE)
            .modify(function (e, t) {
              (o("WAWebWamUtils").processWorkerWamDataRow(e), delete t.value);
            });
        });
        var t = await e.worker_wam_events.count();
        return t > 0;
      } catch (e) {
        var n = r("getErrorSafe")(e);
        return (
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose(
                [
                  "processWorkerWamData failed: ",
                  `
`,
                  "",
                ],
                ["processWorkerWamData failed: ", "\\n", ""],
              )),
            n,
            n.stack,
          ),
          !1
        );
      }
    }
    var F = {
        add: C,
        update: b,
        deleteAll: v,
        getNextSequenceNumberForStream: S,
        addCoreWamBuffer: D,
        finishAllCoreWamBuffers: x,
        getCoreWamStartingSequenceNumber: $,
        getAllCoreWamBuffers: P,
        nukeAllCoreWamBuffers: N,
        removeWamBufferByKey: M,
        storeWorkerWamData: w,
        processWorkerWamData: A,
        removePsMeta: R,
        getPsMeta: L,
        addPsMeta: E,
        updatePsMeta: k,
        getPsToken: I,
        savePsToken: T,
      },
      O = F;
    l.default = O;
  },
  98,
);
