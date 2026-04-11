__d(
  "WAWebCommunityActivityModel",
  ["$InternalEnum", "WATimeUtils", "WAWebBaseModel", "WAWebModelUtils"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["SUB_GROUP_LINK", "NEW_COMMUNITY"]),
      s = 5 * o("WATimeUtils").DAY_SECONDS,
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebModelUtils").prop()),
            (t.communityId = o("WAWebModelUtils").prop()),
            (t.type = o("WAWebModelUtils").prop()),
            (t.timestamp = o("WAWebModelUtils").prop()),
            (t.subgroupName = o("WAWebModelUtils").prop()),
            (t.subgroupId = o("WAWebModelUtils").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebBaseModel").BaseModel);
    u.Proxy = "communityActivity";
    var c = o("WAWebBaseModel").defineModel(u);
    ((l.ActivityTypeType = e),
      (l.EXPIRATION_TIME_FOR_SUB_GROUP_LINK = s),
      (l.CommunityActivity = c));
  },
  98,
);
