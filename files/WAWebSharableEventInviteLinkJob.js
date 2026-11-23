__d(
  "WAWebSharableEventInviteLinkJob",
  [
    "WALogger",
    "WAWebDBSharableEventInviteLinkToken",
    "WAWebSharableEventCredentials",
    "WAWebSharableEventInviteLinkJobGetOrCreateMutation.graphql",
    "WAWebSharableEventInviteLinkJobInvalidateMutation.graphql",
    "WAWebSharableEventInviteLinkJobRotateMutation.graphql",
    "WAWebSharableEventServerClient",
    "WAWebUserPrefsGeneral",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m =
        e !== void 0
          ? e
          : (e = n(
              "WAWebSharableEventInviteLinkJobGetOrCreateMutation.graphql",
            )),
      p =
        s !== void 0
          ? s
          : (s = n(
              "WAWebSharableEventInviteLinkJobInvalidateMutation.graphql",
            )),
      _ =
        u !== void 0
          ? u
          : (u = n("WAWebSharableEventInviteLinkJobRotateMutation.graphql")),
      f = new Map();
    function g(e) {
      return o(
        "WAWebDBSharableEventInviteLinkToken",
      ).getSharableEventInviteLinkToken(e);
    }
    function h(e) {
      return v(e, async function () {
        var t;
        await o(
          "WAWebSharableEventCredentials",
        ).waitForSharableEventCredentials("invite-link");
        var n = await o(
            "WAWebSharableEventServerClient",
          ).mutateSharableEventServer(m, { input: S(e) }),
          r = n.response;
        return R(
          e,
          r == null || (t = r.xwa_event_get_or_create_invite_link) == null
            ? void 0
            : t.link_token,
          "xwa_event_get_or_create_invite_link",
        );
      });
    }
    function y(e) {
      return v(e, function () {
        return b(e);
      });
    }
    function C(e) {
      return v(e, async function () {
        var t;
        await o(
          "WAWebSharableEventCredentials",
        ).waitForSharableEventCredentials("invite-link");
        var n = await o(
            "WAWebSharableEventServerClient",
          ).mutateSharableEventServer(p, { input: { event_id: e } }),
          a = n.response;
        if (
          (a == null || (t = a.xwa_event_invalidate_invite_link) == null
            ? void 0
            : t.success) !== !0
        )
          throw r("err")(
            "[sharable_event] xwa_event_invalidate_invite_link did not succeed",
          );
        (await o(
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
      });
    }
    async function b(e) {
      var t;
      await o("WAWebSharableEventCredentials").waitForSharableEventCredentials(
        "invite-link",
      );
      var n = await o(
          "WAWebSharableEventServerClient",
        ).mutateSharableEventServer(_, { input: S(e) }),
        r = n.response;
      return R(
        e,
        r == null || (t = r.xwa_event_rotate_invite_link) == null
          ? void 0
          : t.link_token,
        "xwa_event_rotate_invite_link",
      );
    }
    function v(e, t) {
      var n,
        r = (n = f.get(e)) != null ? n : Promise.resolve(),
        o = r.then(t, t);
      f.set(e, o);
      var a = function () {
        f.get(e) === o && f.delete(e);
      };
      return (o.then(a, a), o);
    }
    function S(e) {
      var t;
      return {
        event_id: e,
        pushname:
          (t = o("WAWebUserPrefsGeneral").getPushname()) != null ? t : "",
      };
    }
    async function R(e, t, n) {
      if (t == null || t === "")
        throw r("err")("[sharable_event] " + n + " returned no link token");
      var a = await o(
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
    }
    ((l.getStoredSharableEventInviteLinkToken = g),
      (l.getOrCreateSharableEventInviteLinkToken = h),
      (l.rotateSharableEventInviteLinkToken = y),
      (l.invalidateSharableEventInviteLink = C));
  },
  98,
);
