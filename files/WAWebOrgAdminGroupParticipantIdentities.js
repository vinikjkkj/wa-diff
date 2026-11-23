__d(
  "WAWebOrgAdminGroupParticipantIdentities",
  [
    "WALogger",
    "WAWebApiContact",
    "WAWebApiContactUsernameFields",
    "WAWebGroupQueryJob",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(t, n) {
      var a = p(n);
      if (a.length === 0) return new Map();
      var i = m(t);
      if (i == null) return new Map();
      try {
        await o("WAWebGroupQueryJob").queryAndUpdateGroupMetadataById({
          id: i,
          request: "interactive",
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "loadOrgAdminGroupParticipantIdentities: group metadata refresh failed",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("org-admin-group-participant-identities-refresh-failed");
      }
      var l = a.map(function (e) {
          var t = e.lidWid;
          return t;
        }),
        u = await o("WAWebApiContactUsernameFields")
          .bulkGetContactToUsernameInfoMap(l)
          .catch(function (e) {
            return (
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "loadOrgAdminGroupParticipantIdentities: username lookup failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs(
                  "org-admin-group-participant-identities-username-failed",
                ),
              new Map()
            );
          });
      return new Map(
        a.map(function (e) {
          var t,
            n,
            r = e.lid,
            a = e.lidWid,
            i = u.get(a.toJid());
          return [
            r,
            {
              phoneNumber:
                (t =
                  (n = o("WAWebApiContact").getPnIfLidIsLatestMapping(a)) ==
                  null
                    ? void 0
                    : n.user) != null
                  ? t
                  : null,
              username:
                (i == null ? void 0 : i.usernameSoftDeleted) === !0
                  ? null
                  : _(i == null ? void 0 : i.username),
            },
          ];
        }),
      );
    }
    function m(e) {
      var t = e.includes("@") ? e : e + "@g.us";
      try {
        return o("WAWebWidFactory").asGroupWidOrThrow(
          o("WAWebWidFactory").createWid(t),
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "loadOrgAdminGroupParticipantIdentities: invalid group identifier",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("org-admin-group-participant-identities-invalid-gid"),
          null
        );
      }
    }
    function p(e) {
      var t = [],
        n = 0;
      for (var r of new Set(e))
        try {
          t.push({
            lid: r,
            lidWid: o("WAWebWidFactory").createUserLidOrThrow(r, "lid"),
          });
        } catch (e) {
          n++;
        }
      return (
        n > 0 &&
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "loadOrgAdminGroupParticipantIdentities: skipped ",
                  " invalid lids",
                ])),
              n,
            )
            .sendLogs("org-admin-group-participant-identities-invalid-lids"),
        t
      );
    }
    function _(e) {
      var t = o("WAWebUsernameTypes").serializeMaybeUsername(e);
      return t == null || t === "" ? null : t;
    }
    l.loadOrgAdminGroupParticipantIdentities = d;
  },
  98,
);
