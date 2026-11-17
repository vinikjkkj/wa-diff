__d(
  "WAWebSharableEventInviteLinkJob",
  [
    "Promise",
    "WALogger",
    "WAWebDBSharableEventInviteLinkToken",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventInviteLinkJobGetOrCreateMutation.graphql",
    "WAWebSharableEventInviteLinkJobInvalidateMutation.graphql",
    "WAWebSharableEventInviteLinkJobRotateMutation.graphql",
    "WAWebSharableEventServerClient",
    "WAWebUserPrefsGeneral",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p =
        e !== void 0
          ? e
          : (e = n(
              "WAWebSharableEventInviteLinkJobGetOrCreateMutation.graphql",
            )),
      _ =
        s !== void 0
          ? s
          : (s = n(
              "WAWebSharableEventInviteLinkJobInvalidateMutation.graphql",
            )),
      f =
        u !== void 0
          ? u
          : (u = n("WAWebSharableEventInviteLinkJobRotateMutation.graphql")),
      g = new Map();
    function h(e) {
      return o(
        "WAWebDBSharableEventInviteLinkToken",
      ).getSharableEventInviteLinkToken(e);
    }
    function y(e) {
      return R(
        e,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          yield o(
            "WAWebSharableEventCredentials",
          ).waitForSharableEventCredentials("invite-link");
          var n = yield o(
              "WAWebSharableEventServerClient",
            ).mutateSharableEventServer(p, { input: L(e) }),
            r = n.response;
          return E(
            e,
            r == null || (t = r.xwa_event_get_or_create_invite_link) == null
              ? void 0
              : t.link_token,
            "xwa_event_get_or_create_invite_link",
          );
        }),
      );
    }
    function C(e) {
      return R(e, function () {
        return v(e);
      });
    }
    function b(e) {
      return R(
        e,
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t;
          yield o(
            "WAWebSharableEventCredentials",
          ).waitForSharableEventCredentials("invite-link");
          var n = yield o(
              "WAWebSharableEventServerClient",
            ).mutateSharableEventServer(_, { input: { event_id: e } }),
            a = n.response;
          if (
            (a == null || (t = a.xwa_event_invalidate_invite_link) == null
              ? void 0
              : t.success) !== !0
          )
            throw r("err")(
              "[sharable_event] xwa_event_invalidate_invite_link did not succeed",
            );
          (yield o(
            "WAWebDBSharableEventInviteLinkToken",
          ).clearSharableEventInviteLinkToken(e),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite-link] xwa_event_invalidate_invite_link eventId=",
                  "",
                ])),
              e,
            ));
        }),
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          yield o(
            "WAWebSharableEventCredentials",
          ).waitForSharableEventCredentials("invite-link");
          var n = yield o(
              "WAWebSharableEventServerClient",
            ).mutateSharableEventServer(f, { input: L(e) }),
            r = n.response;
          return E(
            e,
            r == null || (t = r.xwa_event_rotate_invite_link) == null
              ? void 0
              : t.link_token,
            "xwa_event_rotate_invite_link",
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      var r,
        o = (r = g.get(e)) != null ? r : (m || (m = n("Promise"))).resolve(),
        a = o.then(t, t);
      g.set(e, a);
      var i = function () {
        g.get(e) === a && g.delete(e);
      };
      return (a.then(i, i), a);
    }
    function L(e) {
      var t;
      return {
        event_id: e,
        pushname:
          (t = o("WAWebUserPrefsGeneral").getPushname()) != null ? t : "",
      };
    }
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (t == null || t === "")
            throw r("err")("[sharable_event] " + n + " returned no link token");
          var a = yield o(
            "WAWebDBSharableEventInviteLinkToken",
          ).saveSharableEventInviteLinkToken(e, t);
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[sharable_event][invite-link] ",
                  " eventId=",
                  " saved=",
                  "",
                ])),
              n,
              e,
              String(a),
            ),
            t
          );
        })),
        k.apply(this, arguments)
      );
    }
    ((l.getStoredSharableEventInviteLinkToken = h),
      (l.getOrCreateSharableEventInviteLinkToken = y),
      (l.rotateSharableEventInviteLinkToken = C),
      (l.invalidateSharableEventInviteLink = b));
  },
  98,
);
