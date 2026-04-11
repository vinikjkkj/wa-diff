__d(
  "WAWebCommonGroupsCollection",
  [
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebChatComparator",
    "WAWebChatModel",
    "WAWebGroupMetadataCollection",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var a;
        ((a = e.call(this) || this),
          (a.stale = !1),
          (a.updateCommonGroups = function (e) {
            var t = e.collectionIsStale,
              n = e.gid,
              i = r("WAWebGroupMetadataCollection").assertGet(n),
              l = i.participants,
              s = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
              u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              c = l.get(a.contact) != null,
              d = s != null && l.get(s) != null,
              m = l.get(u) != null,
              p = c && (d || m);
            a.get(n)
              ? p || a.remove(n)
              : (p || t) &&
                a.add(o("WAWebChatCollection").ChatCollection.assertGet(n));
          }),
          a.add(t, { silent: !0 }),
          (a.contact = n));
        var i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
          l = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow();
        return (
          i != null &&
            a.listenTo(
              r("WAWebGroupMetadataCollection"),
              "group_participant_change_" + i.toString(),
              a.updateCommonGroups,
            ),
          a.listenTo(
            r("WAWebGroupMetadataCollection"),
            "group_participant_change_" + l.toString(),
            a.updateCommonGroups,
          ),
          a.listenTo(
            r("WAWebGroupMetadataCollection"),
            "group_participant_change_" + a.contact.toString(),
            a.updateCommonGroups,
          ),
          a.listenTo(
            o("WAWebSocketModel").Socket,
            "change:stream",
            function () {
              o("WAWebSocketModel").Socket.stream ===
                o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED &&
                (a.stale = !0);
            },
          ),
          a
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseCollection").BaseCollection);
    ((e.model = o("WAWebChatModel").Chat),
      (e.comparator = r("WAWebChatComparator")),
      (l.default = e));
  },
  98,
);
