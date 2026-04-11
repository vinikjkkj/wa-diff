__d(
  "WAWebBizAdCreationAudienceUtils",
  [
    "CometRelay",
    "WAWebBizAdCreationAudienceUtils_EditAudienceMutation.graphql",
    "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation.graphql",
    "err",
    "jsonParseSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return JSON.stringify(e, function (e, t) {
        if (!(e === "type" && t === "")) return t;
      });
    }
    var c =
        e !== void 0
          ? e
          : (e = n(
              "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation.graphql",
            )),
      d =
        s !== void 0
          ? s
          : (s = n(
              "WAWebBizAdCreationAudienceUtils_EditAudienceMutation.graphql",
            ));
    function m(e, t, n, a, i, l, s) {
      o("CometRelay").commitMutation(i, {
        mutation: c,
        onCompleted: function (t) {
          var e = t.saved_audience_create,
            n = {
              audienceID: String(e == null ? void 0 : e.id),
              audienceOption: "SAVED_AUDIENCE",
              clientEditable: !0,
              name: String(e == null ? void 0 : e.name),
              subjectToDSA: !!(e != null && e.subject_to_dsa),
              targetSpec: r("jsonParseSafe")(
                String(
                  e == null ? void 0 : e.target_spec_string_without_placements,
                ),
                {},
              ),
            };
          l(n);
        },
        onError: function (t) {
          (s == null || s(t),
            r("err")("Error when committing audience creation mutation", t));
        },
        updater: function (n) {
          var t = n.get(e),
            r = n.getRootField("saved_audience_create");
          if (t != null && r != null) {
            var a = o("CometRelay").ConnectionHandler.getConnection(
              t,
              "WAWebBizAdCreationAudienceSection_savedAudiences",
              { for_types: "SAVE_AUDIENCE", orderby: "LAST_UPDATED" },
            );
            if (a != null) {
              var i = o("CometRelay").ConnectionHandler.createEdge(
                n,
                a,
                r,
                "SavedAudienceEdge",
              );
              o("CometRelay").ConnectionHandler.insertEdgeBefore(a, i);
            }
          }
        },
        variables: { legacyAdAccountID: t, name: a, targetingSpecString: u(n) },
      });
    }
    function p(e) {
      var t = e.audienceName,
        n = e.callback,
        a = e.onError,
        i = e.relayEnvironment,
        l = e.savedAudienceID,
        s = e.targetingSpec,
        c = u(s);
      o("CometRelay").commitMutation(i, {
        mutation: d,
        onCompleted: function (t) {
          var e = t.saved_audience_edit;
          n({ subjectToDSA: !!(e != null && e.subject_to_dsa) });
        },
        updater: function (n) {
          var e = n.get(l);
          e != null &&
            (e.setValue(t, "name"),
            e.setValue(c, "target_spec_string_without_placements"));
        },
        onError: function (t) {
          throw (
            a == null || a(t),
            r("err")("Error when committing audience edit mutation", t)
          );
        },
        variables: { name: t, savedAudienceID: l, targetingSpecString: c },
      });
    }
    ((l.createSavedAudience = m), (l.editAudience = p));
  },
  98,
);
