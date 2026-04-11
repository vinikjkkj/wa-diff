__d(
  "WAWebAddonProcessMsgs",
  [
    "AddonPlaceholderMsgsUtils",
    "Promise",
    "WALogger",
    "WAWebAddonConstants",
    "WAWebAddonCrossWindowUtils",
    "WAWebAddonEncryptAddonMsgData",
    "WAWebAddonLogUtils",
    "WAWebAddonPluginProcessor",
    "WAWebAddonProcessMsgsUtils",
    "WAWebAddonSelectUtils",
    "WAWebAddonSortUtils",
    "WAWebAddonUpdateDataUtils",
    "WAWebHandleMsgError",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f;
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.addons,
            a = t.processMode,
            i = t.processor,
            l = i.convert.toDualDecryptedMsgData;
          if (
            l == null ||
            a === o("WAWebAddonConstants").AddonProcessMode.HistorySync ||
            a !== o("WAWebAddonConstants").AddonProcessMode.OnlineReceive
          )
            return r;
          var s = [],
            u = yield (f || (f = n("Promise"))).allSettled(
              r.map(
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      return o("WAWebAddonCrossWindowUtils").isRealAddonType(t)
                        ? l(t, e.getForAddon(t))
                        : t;
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
            ),
            m = [];
          for (var p of u)
            p.status === "fulfilled"
              ? s.push(p.value)
              : m.length < 3 && m.push(p.reason);
          return (
            m.length > 0 &&
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "Cannot decrypt ",
                    " message(s) => ",
                    "",
                  ])),
                m.length,
                m,
              ),
            o("WAWebAddonLogUtils").hasSettledWithError(u) &&
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[addon-infra] Failed to decrypt a message",
                    ])),
                )
                .tags("messagings", "addons")
                .sendLogs(String(a) + "-decription-failed", { sampling: 0.01 }),
            s
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.addons,
            r = t.processMode,
            a = t.processor,
            i = t.tableMode,
            l = a.convert.toDualDecryptedMsgData,
            s = [],
            u = l == null ? n : yield g(e, t);
          if (
            a.type ===
            o("WAWebAddonConstants").AddonProcessorType
              .DualEncryptedWithMessageTraits
          ) {
            var c = o("AddonPlaceholderMsgsUtils").getIncomingPlaceholderKeys(
              t,
            );
            if (c != null) {
              var d = yield o(
                "AddonPlaceholderMsgsUtils",
              ).getPlaceholderMsgKeys(i, c);
              u = u.filter(function (e) {
                return !d.has(e.id.toString());
              });
            }
          }
          return (
            (s = yield a.beforeUpsert(u, { processMode: r, parents: e })),
            { processor: a, processMode: r, tableMode: i, addons: s }
          );
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
          var n = t.addons,
            r = t.processMode,
            a = t.processor,
            i = t.tableMode;
          if (
            a.type ===
            o("WAWebAddonConstants").AddonProcessorType
              .DualEncryptedWithMessageTraits
          ) {
            var l = yield o("AddonPlaceholderMsgsUtils").getPlaceholderMsgKeys(
              i,
              n.map(function (e) {
                return e.id;
              }),
            );
            yield a.afterUpsert(n, {
              processMode: r,
              parents: e,
              existingPlaceholderKeys: l,
            });
          } else yield a.afterUpsert(n, { processMode: r, parents: e });
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n, r, o) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            var l,
              s = yield (f || (f = n("Promise"))).all(
                o("WAWebAddonSortUtils")
                  .groupAddonsByProcessor(e.mode, t, r)
                  .map(function (e) {
                    return y(a, e);
                  }),
              ),
              u = (l = []).concat.apply(
                l,
                s.map(function (e) {
                  var t = e.addons;
                  return t;
                }),
              );
            (u.length &&
              (yield o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
                { processMode: e.mode, tableMode: t },
                { add: u },
                { metricReporter: i },
              )),
              yield f.all(
                s.map(function (e) {
                  return b(a, e);
                }),
              ),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[addon-infra]: processed ",
                    " addon(s) during ",
                    ", table mode ",
                    "",
                  ])),
                r.length,
                e.mode,
                o("WAWebAddonConstants").AddonTableMode.getName(t),
              ));
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r) {
      var a = r.failSilently,
        i = r.metricReporter;
      return Array.from(
        o("WAWebAddonSortUtils").groupAddonsByTableMode(t),
        function (r) {
          var l = r[0],
            c = r[1];
          return S(e, l, c, n, i).catch(function (n) {
            if (n instanceof o("WAWebHandleMsgError").MessageValidationError) {
              var r;
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "failed incoming addons processing",
                    ])),
                )
                .catching(n)
                .tags("addons", "messaging")
                .sendLogs(
                  "processAddonMsgs: " +
                    ((r = t[0]) == null ? void 0 : r.type) +
                    " in " +
                    String(l),
                );
            } else {
              var i,
                c =
                  "addon-" +
                  String(e.mode) +
                  "-error: " +
                  ((i = t[0]) == null ? void 0 : i.type);
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[AddonInfraError] failed saving addons in ",
                      "",
                    ])),
                  l,
                )
                .catching(n)
                .tags("addons", "messaging")
                .sendLogs(c);
            }
            if (!a) throw n;
          });
        },
      );
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          if (e.length === 0) return { orphans: [] };
          var a = {
              mode:
                r != null
                  ? r
                  : o("WAWebAddonConstants").AddonProcessMode.OnlineReceive,
            },
            i = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
              e,
              a.mode,
            ),
            l = i[0],
            s = i[1],
            u = o("WAWebAddonSortUtils").collectValidAndOrphanAddons(s, l),
            c = u.orphans,
            d = u.validAddons,
            m = L(
              a,
              d,
              o("WAWebAddonSelectUtils").createAddonParentSelector(l),
              { metricReporter: t, failSilently: !0 },
            );
          return (
            yield (f || (f = n("Promise"))).allSettled(m),
            { orphans: c }
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = { mode: e },
              l = L(
                i,
                [t],
                o("WAWebAddonSelectUtils").createAddonParentSelector(r),
                { metricReporter: a, failSilently: !1 },
              );
            yield (f || (f = n("Promise"))).all(l);
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            var i = r.getForAddon(t),
              l = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = o(
                      "WAWebAddonEncryptAddonMsgData",
                    ).createDualEncryptionHelper(t, i);
                    return e ? e.encrypt() : t;
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
              s = yield (f || (f = n("Promise"))).all([
                l(),
                S(
                  { mode: e },
                  o("WAWebAddonSelectUtils").getAddonTableMode(t),
                  [t],
                  r,
                  a,
                ),
              ]),
              u = s[0];
            return { encryptedMsgData: u, decryptedMsgData: t, parent: i };
          },
        )),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a,
              i = o("WAWebAddonPluginProcessor").getAddonProcessor(t);
            i.updateCollection({ add: [t], remove: [] }, e);
            var l = o("WAWebAddonProcessMsgsUtils").getParentMsgKey(t),
              s = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(t),
              u = (a = l.participant) == null ? void 0 : a.isLid();
            o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[addon-infra] optimistic update ",
                  " (",
                  ") id=",
                  " parent=",
                  " lid=",
                  "",
                ])),
              s,
              t.type,
              t.id.id,
              l.id,
              u,
            );
            var c = yield o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
                [t],
                e,
              ),
              d = c[0],
              m = c[1],
              f = yield D(
                e,
                m[0],
                o("WAWebAddonSelectUtils").createAddonParentSelector(d),
                n,
              );
            return f;
          } catch (e) {
            var g = r("getErrorSafe")(e);
            throw (
              o("WALogger")
                .ERROR(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "process optimistic addon msg send",
                    ])),
                )
                .catching(g)
                .tags("addons", "messaging")
                .sendLogs("failed-optimistic-addon-send"),
              g
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = {
                mode: o("WAWebAddonConstants").AddonProcessMode.HistorySync,
              },
              r = o("WAWebAddonSelectUtils").createAddonParentSelector(
                new Map(),
              ),
              a = L(t, e, r, { failSilently: !0 });
            yield (f || (f = n("Promise"))).allSettled(a);
          }
        })),
        M.apply(this, arguments)
      );
    }
    ((l.processMsgsAndGetOrphans = E),
      (l.processOutgoingMsg = I),
      (l.processOutgoingMsgOptimisticUpdate = $),
      (l.processHistoryMsgs = N));
  },
  98,
);
