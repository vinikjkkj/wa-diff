__d(
  "WAWebBizBroadcastProAudienceChatQuery",
  [
    "WALogger",
    "WAWebBizBroadcastProAudienceIdentityQuery",
    "WAWebLidAwareContactsDB",
    "WAWebRunInBatches",
    "WAWebSchemaChat",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 256;
    async function u(e, t) {
      var n = Array.from(new Set(e)),
        r = new Map(),
        a = new Map(),
        i = new Set(),
        l = function (t) {
          i.add(t);
        };
      return (
        await o("WAWebRunInBatches").runInBatches(
          n,
          function (e) {
            return c(e, r, a, l);
          },
          { batchSize: s },
        ),
        n
          .filter(function (e) {
            return !r.has(e) && i.has(e);
          })
          .forEach(function (e) {
            return t == null ? void 0 : t(e);
          }),
        n.flatMap(function (e) {
          var t = r.get(e);
          return t == null ? [] : [{ accountLid: e, chatWid: t }];
        })
      );
    }
    async function c(e, t, n, r) {
      var a = await o("WAWebSchemaChat")
          .getChatTable()
          .anyOf(["accountLid"], e, { shouldDecrypt: !1 }),
        i = new Map(
          e.map(function (e) {
            return [e, e];
          }),
        );
      for (var l of a) {
        var s,
          u = i.get((s = l.accountLid) != null ? s : "");
        u != null && d(l, u, t, r);
      }
      var c = e.filter(function (e) {
        return !t.has(e);
      });
      if (c.length !== 0) {
        var m = await o("WAWebSchemaChat").getChatTable().bulkGet(c, !1);
        (m.forEach(function (e, n) {
          return d(e, c[n], t, r);
        }),
          await p(
            c.filter(function (e) {
              return !t.has(e);
            }),
            t,
            n,
            r,
          ));
      }
    }
    function d(e, t, n, r) {
      var o = m(e, t);
      o != null ? n.set(t, o) : e != null && (r == null || r(t));
    }
    function m(e, t) {
      if (e == null || (e.accountLid != null && e.accountLid !== t))
        return null;
      var n = h(e.id);
      return n == null || (n.isLid() && n.toString() !== t) ? null : n;
    }
    async function p(e, t, n, a) {
      if (e.length !== 0) {
        var i = await r("WAWebLidAwareContactsDB").bulkGet(e, !1),
          l = i.flatMap(function (t, n) {
            return _(t, e[n], a);
          });
        if (l.length !== 0) {
          var s = await o("WAWebSchemaChat")
            .getChatTable()
            .bulkGet(
              l.map(function (e) {
                return e.phoneWid.toString();
              }),
              !1,
            );
          (await g(
            l.map(function (e) {
              return e.phoneWid;
            }),
            n,
          ),
            s.forEach(function (e, r) {
              var o = l[r],
                i = o.accountLid,
                s = o.phoneWid,
                u = n.get(s.toString());
              u === i ? d(e, i, t, a) : e != null && (a == null || a(i));
            }));
        }
      }
    }
    function _(e, t, n) {
      if (
        (e == null ? void 0 : e.phoneNumber) == null ||
        e.phoneNumberCreatedAt == null
      )
        return (f(e, t, n), []);
      var r = h(e.phoneNumber);
      return r != null && !r.isLid()
        ? [{ accountLid: t, phoneWid: r }]
        : (f(e, t, n), []);
    }
    function f(e, t, n) {
      (e == null ? void 0 : e.phoneNumber) != null && (n == null || n(t));
    }
    async function g(e, t) {
      var n = e.filter(function (e) {
          return !t.has(e.toString());
        }),
        r = await o(
          "WAWebBizBroadcastProAudienceIdentityQuery",
        ).resolveProAudienceLids(n);
      for (var a of n) t.set(a.toString(), r.get(a.toString()));
    }
    function h(t) {
      try {
        return o("WAWebWidFactory").createUserWidOrThrow(t);
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Rejected a stored BB Pro audience chat identity",
                ])),
            )
            .sendLogs("bb-pro-audience-stored-chat-id-invalid"),
          null
        );
      }
    }
    l.resolveProAudienceChats = u;
  },
  98,
);
