__d(
  "WAWebCustomerManagerImportUndoAction",
  [
    "WALogger",
    "WAWebContactManagerCustomerProfileDeleteMutation",
    "WAWebCustomerManagerDeleteContactAction",
    "WAWebCustomerManagerGating",
    "WAWebCustomerManagerImportRateLimiter",
    "WAWebCustomerProfileChangeNotifier",
    "WAWebDeleteContactAction",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 10,
      c = 250;
    function d(t, n) {
      var a = { failureCount: 0, successCount: 0 };
      return n.reduce(function (n, a, i) {
        return a.status === "fulfilled"
          ? babelHelpers.extends({}, n, { successCount: n.successCount + 1 })
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[cm:import] undo failed for row ",
                    "",
                  ])),
                t[i].rowIndex,
              )
              .catching(r("getErrorSafe")(a.reason))
              .sendLogs("cm-import-undo-row-failed"),
            babelHelpers.extends({}, n, { failureCount: n.failureCount + 1 }));
      }, a);
    }
    async function m(e, t, n, r, o) {
      var a;
      if ((r === void 0 && (r = 0), o === void 0 && (o = []), r >= e.length))
        return o;
      var i = await Promise.allSettled(e.slice(r, r + t).map(n));
      return ((a = o).push.apply(a, i), m(e, t, n, r + t, o));
    }
    function p(e, t, n) {
      var r = n && t.status === "fulfilled";
      (e.wasNewProfile || n) &&
        !r &&
        o("WAWebCustomerProfileChangeNotifier").notifyCustomerProfileChanged(
          e.chatJid,
        );
    }
    async function _(e, t, n, a, i) {
      if ((i === void 0 && (i = 0), i >= t.length)) return a;
      var l = t.slice(i, i + c),
        s = a,
        d = s
          ? {
              status: "rejected",
              reason: r("err")("[cm:import] undo rate-limited"),
            }
          : null;
      if (d == null)
        try {
          await o("WAWebDeleteContactAction").deleteContactBatchAction(
            l.map(function (e) {
              var t = e.phoneNumber;
              return t;
            }),
          );
        } catch (e) {
          ((s = o("WAWebCustomerManagerImportRateLimiter").isUsyncRateLimit(e)),
            (d = { status: "rejected", reason: r("getErrorSafe")(e) }));
        }
      var p = d,
        f =
          p != null
            ? l.map(function () {
                return p;
              })
            : await m(l, u, function (t) {
                var n = t.index,
                  r = t.lid;
                return o(
                  "WAWebCustomerManagerDeleteContactAction",
                ).finishContactDelete(e[n].chatJid, r);
              });
      return (
        l.forEach(function (e, t) {
          var r = e.index;
          n[r] = f[t];
        }),
        _(e, t, n, s, i + c)
      );
    }
    async function f(e, t) {
      if (t.rateLimited) throw r("err")("[cm:import] undo rate-limited");
      try {
        await o(
          "WAWebCustomerManagerDeleteContactAction",
        ).deleteContactFromCustomerManager(e);
      } catch (e) {
        throw (
          o("WAWebCustomerManagerImportRateLimiter").isUsyncRateLimit(e) &&
            (t.rateLimited = !0),
          e
        );
      }
    }
    async function g(e) {
      return m(e, u, async function (e) {
        var t = !1,
          n = !1;
        try {
          (e.wasNewProfile &&
            (await o(
              "WAWebContactManagerCustomerProfileDeleteMutation",
            ).deleteCustomerProfileFromServer(e.chatJid)),
            e.wasNewContact &&
              ((t = !0),
              await o(
                "WAWebCustomerManagerDeleteContactAction",
              ).deleteContactFromCustomerManager(e.chatJid),
              (n = !0)));
        } finally {
          (e.wasNewProfile || t) &&
            !n &&
            o(
              "WAWebCustomerProfileChangeNotifier",
            ).notifyCustomerProfileChanged(e.chatJid);
        }
      });
    }
    async function h(e) {
      var t = await m(e, u, async function (e) {
          e.wasNewProfile &&
            (await o(
              "WAWebContactManagerCustomerProfileDeleteMutation",
            ).deleteCustomerProfileFromServer(e.chatJid));
        }),
        n = e.flatMap(function (e, n) {
          return e.wasNewContact && t[n].status === "fulfilled" ? [n] : [];
        }),
        r = await m(n, u, function (t) {
          return o("WAWebCustomerManagerDeleteContactAction").planContactDelete(
            e[t].chatJid,
          );
        }),
        a = [],
        i = [];
      n.forEach(function (e, n) {
        var o = r[n];
        o.status === "rejected"
          ? (t[e] = o)
          : o.value.kind === "batch"
            ? a.push({
                index: e,
                phoneNumber: o.value.phoneNumber,
                lid: o.value.lid,
              })
            : i.push(e);
      });
      var l = { rateLimited: await _(e, a, t, !1) },
        s = await m(i, u, function (t) {
          return f(e[t].chatJid, l);
        });
      i.forEach(function (e, n) {
        t[e] = s[n];
      });
      var c = new Set(n);
      return (
        e.forEach(function (e, n) {
          p(e, t[n], c.has(n));
        }),
        t
      );
    }
    async function y(e) {
      var t = o(
          "WAWebCustomerManagerGating",
        ).customerManagerImportExportEnabled()
          ? await h(e)
          : await g(e),
        n = d(e, t);
      return (
        o("WALogger")
          .LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[cm:import] undo complete: ",
                " ok, ",
                " failed",
              ])),
            n.successCount,
            n.failureCount,
          )
          .sendLogs("cm-import-undo-complete"),
        n
      );
    }
    l.undoImportedContacts = y;
  },
  98,
);
