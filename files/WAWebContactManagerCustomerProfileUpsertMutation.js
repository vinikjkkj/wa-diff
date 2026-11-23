__d(
  "WAWebContactManagerCustomerProfileUpsertMutation",
  [
    "WALogger",
    "WAWebContactManagerCustomerProfileQuery",
    "WAWebContactManagerCustomerProfileUpsertInput",
    "WAWebContactManagerCustomerProfileUpsertMutation.graphql",
    "WAWebCustomerManagerProfileRequest",
    "WAWebRelayClient",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebContactManagerCustomerProfileUpsertMutation.graphql"));
    async function c(e, t) {
      await p([{ chatJid: e, profile: t }]);
    }
    async function d(e) {
      if (e.length === 0) return [];
      var t = e.map(function (e) {
          var t = e.chatJid,
            n = e.profile;
          return babelHelpers.extends(
            {},
            o("WAWebContactManagerCustomerProfileUpsertInput").buildUpsertInput(
              t,
              n,
            ),
            { if_match: "" },
          );
        }),
        n = new Set(
          t.map(function (e) {
            var t = e.lid;
            return t;
          }),
        );
      if (n.size !== e.length)
        throw r("err")(
          "[CustomerManager] customer profile import: duplicate LID",
        );
      var a = await C(t);
      if (
        (a == null ? void 0 : a.profiles) == null ||
        a.conflicts == null ||
        a.unresolved_lids == null
      )
        throw r("err")(
          "[CustomerManager] customer profile import: missing write results",
        );
      var i = new Map();
      function l(e, t) {
        if (e == null || !n.delete(e))
          throw r("err")(
            "[CustomerManager] customer profile import: unexpected or duplicate result LID",
          );
        i.set(e, t);
      }
      return (
        a.profiles.forEach(function (e) {
          var t = e.lid_jid;
          return l(t, "written");
        }),
        a.conflicts.forEach(function (e) {
          var t = e.lid_jid;
          return l(t, "existing");
        }),
        a.unresolved_lids.forEach(function (e) {
          return l(e, "unresolved");
        }),
        t.map(function (e) {
          var t = e.lid,
            n = i.get(t);
          if (n == null)
            throw r("err")(
              "[CustomerManager] customer profile import: missing result LID",
            );
          return n;
        })
      );
    }
    async function m(e, t, n) {
      if (n === "")
        throw r("err")(
          "[CustomerManager] customer profile patch requires an etag",
        );
      return h([
        babelHelpers.extends(
          {},
          o("WAWebContactManagerCustomerProfileUpsertInput").buildUpsertInput(
            e,
            t,
          ),
          { if_match: n },
        ),
      ]);
    }
    async function p(e) {
      if (e.length !== 0) {
        var t = e.length === 1 ? _(e[0].profile) : null;
        if (t != null) {
          await f(e[0].chatJid, e[0].profile, t);
          return;
        }
        var n = await h(
          e.map(function (e) {
            var t = e.chatJid,
              n = e.profile;
            return o(
              "WAWebContactManagerCustomerProfileUpsertInput",
            ).buildUpsertInput(t, n);
          }),
        );
        if (!n)
          throw r("err")(
            "[CustomerManager] customer profile upsert: batch rejected by a version precondition",
          );
      }
    }
    function _(e) {
      var t = e.birthday,
        n = t == null ? void 0 : t.ifMatch;
      return t != null && n != null
        ? babelHelpers.extends({}, t, { ifMatch: n })
        : null;
    }
    async function f(e, t, n, a) {
      var i, l;
      if (
        (a === void 0 && (a = 1),
        !(await h([
          o("WAWebContactManagerCustomerProfileUpsertInput").buildUpsertInput(
            e,
            babelHelpers.extends({}, t, { birthday: n }),
          ),
        ])))
      ) {
        if (a === 3)
          throw r("err")(
            "[CustomerManager] customer profile birthday changed during save",
          );
        var s = await o(
          "WAWebContactManagerCustomerProfileQuery",
        ).fetchCustomerProfile(e);
        if (s == null && n.ifMatch !== "")
          throw r("err")(
            "[CustomerManager] customer profile birthday could not be verified after conflict",
          );
        await f(
          e,
          t,
          babelHelpers.extends({}, n, {
            ifMatch: (i = s == null ? void 0 : s.etag) != null ? i : "",
            storedDob:
              (l = s == null ? void 0 : s.birthdayIso) != null ? l : null,
          }),
          a + 1,
        );
      }
    }
    async function g(e, t) {
      await h([
        o(
          "WAWebContactManagerCustomerProfileUpsertInput",
        ).buildFieldUpdateInput(e, t),
      ]);
    }
    async function h(e) {
      var t,
        n,
        a,
        i = await C(e),
        l = e.length === 1 ? e[0] : null;
      if (
        l != null &&
        l.if_match != null &&
        !y(
          i == null ? void 0 : i.profiles,
          i == null ? void 0 : i.conflicts,
          l.lid,
        )
      )
        throw r("err")(
          "[CustomerManager] customer profile upsert: no confirmed profile write",
        );
      if (
        ((t = i == null || (n = i.conflicts) == null ? void 0 : n.length) !=
        null
          ? t
          : 0) > 0
      ) {
        if (
          e.every(function (e) {
            return e.if_match == null;
          })
        )
          throw r("err")(
            "[CustomerManager] customer profile upsert: conflict without version precondition",
          );
        return !1;
      }
      if (
        (i == null || (a = i.profiles) == null ? void 0 : a.length) !== e.length
      )
        throw r("err")(
          "[CustomerManager] customer profile upsert: no confirmed profile write",
        );
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[CustomerManager] customer profile upsert: synced ",
              " profiles",
            ])),
          e.length,
        ),
        !0
      );
    }
    function y(e, t, n) {
      var r;
      if (e == null || t == null) return !1;
      var o = (r = e[0]) != null ? r : t[0];
      return (
        e.length + t.length === 1 && (o == null ? void 0 : o.lid_jid) === n
      );
    }
    async function C(e) {
      return o("WAWebCustomerManagerProfileRequest").runCustomerProfileRequest(
        "customer profile upsert",
        async function (t) {
          var n = await o("WAWebRelayClient").commitMutation(
            u,
            { input: e },
            t,
          );
          return n == null ? void 0 : n.xfb_wa_upsert_customer_profiles;
        },
        { rateLimitSurface: "write" },
      );
    }
    ((l.upsertCustomerProfileToServer = c),
      (l.createCustomerProfilesIfAbsent = d),
      (l.updateCustomerProfileIfUnchanged = m),
      (l.upsertCustomerProfilesToServer = p),
      (l.upsertCustomerProfileFieldToServer = g));
  },
  98,
);
