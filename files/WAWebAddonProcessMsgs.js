__d(
  "WAWebAddonProcessMsgs",
  [
    "AddonPlaceholderMsgsUtils",
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
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _;
    async function f(t, n) {
      var r = n.addons,
        a = n.processMode,
        i = n.processor,
        l = i.convert.toDualDecryptedMsgData;
      if (
        l == null ||
        a === o("WAWebAddonConstants").AddonProcessMode.HistorySync ||
        a !== o("WAWebAddonConstants").AddonProcessMode.OnlineReceive
      )
        return r;
      var u = [],
        c = await Promise.allSettled(
          r.map(async function (e) {
            return o("WAWebAddonCrossWindowUtils").isRealAddonType(e)
              ? l(e, t.getForAddon(e))
              : e;
          }),
        ),
        d = [];
      for (var m of c)
        m.status === "fulfilled"
          ? u.push(m.value)
          : d.length < 3 && d.push(m.reason);
      return (
        d.length > 0 &&
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Cannot decrypt ",
                " message(s) => ",
                "",
              ])),
            d.length,
            d,
          ),
        o("WAWebAddonLogUtils").hasSettledWithError(c) &&
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[addon-infra] Failed to decrypt a message",
                ])),
            )
            .tags("messagings", "addons")
            .sendLogs(String(a) + "-decription-failed", { sampling: 0.01 }),
        u
      );
    }
    async function g(e, t) {
      var n = t.addons,
        r = t.processMode,
        a = t.processor,
        i = t.tableMode,
        l = a.convert.toDualDecryptedMsgData,
        s = [],
        u = l == null ? n : await f(e, t);
      if (
        a.type ===
        o("WAWebAddonConstants").AddonProcessorType
          .DualEncryptedWithMessageTraits
      ) {
        var c = o("AddonPlaceholderMsgsUtils").getIncomingPlaceholderKeys(t);
        if (c != null) {
          var d = await o("AddonPlaceholderMsgsUtils").getPlaceholderMsgKeys(
            i,
            c,
          );
          u = u.filter(function (e) {
            return !d.has(e.id.toString());
          });
        }
      }
      return (
        (s = await a.beforeUpsert(u, { processMode: r, parents: e })),
        { processor: a, processMode: r, tableMode: i, addons: s }
      );
    }
    async function h(e, t) {
      var n = t.addons,
        r = t.processMode,
        a = t.processor,
        i = t.tableMode;
      if (
        a.type ===
        o("WAWebAddonConstants").AddonProcessorType
          .DualEncryptedWithMessageTraits
      ) {
        var l = await o("AddonPlaceholderMsgsUtils").getPlaceholderMsgKeys(
          i,
          n.map(function (e) {
            return e.id;
          }),
        );
        await a.afterUpsert(n, {
          processMode: r,
          parents: e,
          existingPlaceholderKeys: l,
        });
      } else await a.afterUpsert(n, { processMode: r, parents: e });
    }
    async function y(e, t, n, r, a) {
      var i,
        l = await Promise.all(
          o("WAWebAddonSortUtils")
            .groupAddonsByProcessor(e.mode, t, n)
            .map(function (e) {
              return g(r, e);
            }),
        ),
        s = (i = []).concat.apply(
          i,
          l.map(function (e) {
            var t = e.addons;
            return t;
          }),
        );
      (s.length &&
        (await o("WAWebAddonUpdateDataUtils").updateAddonsInTableMode(
          { processMode: e.mode, tableMode: t },
          { add: s },
          { metricReporter: a },
        )),
        await Promise.all(
          l.map(function (e) {
            return h(r, e);
          }),
        ),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[addon-infra]: processed ",
              " addon(s) during ",
              ", table mode ",
              "",
            ])),
          n.length,
          e.mode,
          o("WAWebAddonConstants").AddonTableMode.getName(t),
        ));
    }
    function C(e) {
      var t = e.addons,
        n = e.failSilently,
        a = e.metricReporter,
        i = e.parents,
        l = e.process;
      return Array.from(
        o("WAWebAddonSortUtils").groupAddonsByTableMode(t),
        function (e) {
          var s = e[0],
            u = e[1];
          return y(l, s, u, i, a).catch(function (e) {
            var a = r("getErrorSafe")(e);
            if (e instanceof o("WAWebHandleMsgError").MessageValidationError) {
              var i;
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "failed incoming addons processing",
                    ])),
                )
                .catching(a)
                .tags("addons", "messaging")
                .sendLogs(
                  "processAddonMsgs: " +
                    ((i = t[0]) == null ? void 0 : i.type) +
                    " in " +
                    String(s),
                );
            } else {
              var u,
                c =
                  "addon-" +
                  String(l.mode) +
                  "-error: " +
                  ((u = t[0]) == null ? void 0 : u.type);
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[AddonInfraError] failed saving addons in ",
                      "",
                    ])),
                  s,
                )
                .catching(a)
                .tags("addons", "messaging")
                .sendLogs(c);
            }
            if (!n) throw e;
          });
        },
      );
    }
    async function b(e, t, n) {
      if (e.length === 0) return { orphans: [] };
      var r = {
          mode:
            n != null
              ? n
              : o("WAWebAddonConstants").AddonProcessMode.OnlineReceive,
        },
        a = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
          e,
          r.mode,
        ),
        i = a[0],
        l = a[1],
        s = o("WAWebAddonSortUtils").collectValidAndOrphanAddons(l, i),
        u = s.orphans,
        c = s.validAddons,
        d = C({
          addons: c,
          failSilently: !0,
          metricReporter: t,
          parents: o("WAWebAddonSelectUtils").createAddonParentSelector(i),
          process: r,
        });
      return (await Promise.allSettled(d), { orphans: u });
    }
    async function v(e, t, n, r) {
      var a = { mode: e },
        i = C({
          addons: [t],
          failSilently: !1,
          metricReporter: r,
          parents: o("WAWebAddonSelectUtils").createAddonParentSelector(n),
          process: a,
        });
      await Promise.all(i);
    }
    async function S(e, t, n, r) {
      var a = n.getForAddon(t),
        i = async function () {
          var e = o("WAWebAddonEncryptAddonMsgData").createDualEncryptionHelper(
            t,
            a,
          );
          return e ? e.encrypt() : t;
        },
        l = await Promise.all([
          i(),
          y(
            { mode: e },
            o("WAWebAddonSelectUtils").getAddonTableMode(t),
            [t],
            n,
            r,
          ),
        ]),
        s = l[0];
      return { encryptedMsgData: s, decryptedMsgData: t, parent: a };
    }
    async function R(e, t, n) {
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
        var c = await o("WAWebAddonProcessMsgsUtils").queryAddonParentMsgs(
            [t],
            e,
          ),
          d = c[0],
          m = c[1],
          f = await S(
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
    }
    async function L(e) {
      if (e.length !== 0) {
        var t = { mode: o("WAWebAddonConstants").AddonProcessMode.HistorySync },
          n = o("WAWebAddonSelectUtils").createAddonParentSelector(new Map()),
          r = C({ addons: e, failSilently: !0, parents: n, process: t });
        await Promise.allSettled(r);
      }
    }
    ((l.processMsgsAndGetOrphans = b),
      (l.processOutgoingMsg = v),
      (l.processOutgoingMsgOptimisticUpdate = R),
      (l.processHistoryMsgs = L));
  },
  98,
);
