__d(
  "WAWebMexGroupMembershipFormFragments",
  [
    "WABase64",
    "WALogger",
    "WAWebMexGroupMembershipFormFragments_communitySubGroup.graphql",
    "WAWebMexGroupMembershipFormFragments_regularGroup.graphql",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    (e !== void 0 ||
      (e = n("WAWebMexGroupMembershipFormFragments_regularGroup.graphql")),
      s !== void 0 ||
        (s = n(
          "WAWebMexGroupMembershipFormFragments_communitySubGroup.graphql",
        )));
    function c(e) {
      var t,
        n =
          (t = e.properties) == null || (t = t.membership_form) == null
            ? void 0
            : t.questions,
        a = null;
      if (n != null && n !== "")
        try {
          a = o("WABase64").decodeB64(n);
        } catch (e) {
          return (
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[gmf] membership form from group info isn't valid base64",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("gmf-group-info-form-decode-failed"),
            null
          );
        }
      var i = e.membership_form_key;
      if (i !== void 0) {
        var l;
        return {
          membershipForm: a,
          membershipFormKeyId:
            (l = i == null ? void 0 : i.key_id) != null ? l : null,
        };
      }
      return {
        membershipForm: a,
        membershipFormKeyId: a != null ? null : void 0,
      };
    }
    l.parseGroupMembershipFormFromGroupInfo = c;
  },
  98,
);
