__d(
  "WAWebListsLogging",
  [
    "WAWebChatGetters",
    "WAWebLabelCollection",
    "WAWebListUpdateUserJourneyWamEvent",
    "WAWebListUpdateWamEvent",
    "WAWebSchemaLabel",
    "WAWebWamEnumListType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e != null)
        switch (e) {
          case o("WAWebSchemaLabel").ListType.NONE:
            return o("WAWebWamEnumListType").LIST_TYPE.NONE;
          case o("WAWebSchemaLabel").ListType.UNREAD:
            return o("WAWebWamEnumListType").LIST_TYPE.UNREAD;
          case o("WAWebSchemaLabel").ListType.GROUPS:
            return o("WAWebWamEnumListType").LIST_TYPE.GROUP;
          case o("WAWebSchemaLabel").ListType.FAVORITES:
            return o("WAWebWamEnumListType").LIST_TYPE.FAVORITE;
          case o("WAWebSchemaLabel").ListType.PREDEFINED:
            return o("WAWebWamEnumListType").LIST_TYPE.PREDEFINED;
          case o("WAWebSchemaLabel").ListType.CUSTOM:
            return o("WAWebWamEnumListType").LIST_TYPE.CUSTOM;
          case o("WAWebSchemaLabel").ListType.COMMUNITY:
            return o("WAWebWamEnumListType").LIST_TYPE.COMMUNITY;
          case o("WAWebSchemaLabel").ListType.SERVER_ASSIGNED:
            return o("WAWebWamEnumListType").LIST_TYPE.SERVER_ASSIGNED;
          case o("WAWebSchemaLabel").ListType.DRAFTED:
            return o("WAWebWamEnumListType").LIST_TYPE.DRAFTS;
          case o("WAWebSchemaLabel").ListType.AI_HANDOFF:
            return o("WAWebWamEnumListType").LIST_TYPE.BUSINESS_AI;
          case o("WAWebSchemaLabel").ListType.AI_RESPONDING:
          case o("WAWebSchemaLabel").ListType.CHANNELS:
            return null;
        }
    }
    function s(t) {
      var n = t.entryPoint,
        r = t.listAction,
        a = t.listId,
        i = t.userJorneyAction,
        l = {
          listAction: r,
          listUpdateUserJourneyAction: i,
          updateEntryPoint: n,
        };
      if (a != null) {
        var s = o("WAWebLabelCollection").LabelCollection.get(a);
        if (s != null) {
          var u = parseInt(s.id, 10);
          isNaN(u) || (l.listId = u);
          var c = e(s.type);
          (c != null && (l.listType = c),
            s.predefinedId != null && (l.predefinedId = s.predefinedId));
        }
      }
      var d = new (o(
        "WAWebListUpdateUserJourneyWamEvent",
      ).ListUpdateUserJourneyWamEvent)(l);
      d.commit();
    }
    function u(t) {
      var n = t.addedChats,
        r = t.chatsBeforeUpdate,
        a = t.entryPoint,
        i = t.listAction,
        l = t.listId,
        s = t.removedChats,
        u = { listId: l, listAction: i, updateEntryPoint: a };
      if (r != null && (n != null || s != null)) {
        var c = 0,
          d = 0,
          m = 0,
          p = 0;
        (r == null ||
          r.forEach(function (e) {
            o("WAWebChatGetters").getIsGroup(e) ? d++ : p++;
          }),
          n == null ||
            n.forEach(function (e) {
              o("WAWebChatGetters").getIsGroup(e) ? c++ : m++;
            }),
          s == null ||
            s.forEach(function (e) {
              o("WAWebChatGetters").getIsGroup(e) ? c-- : m--;
            }),
          (d = Math.max(0, d + c)),
          (p = Math.max(0, p + m)),
          (u = babelHelpers.extends({}, u, {
            groupsAdded: c,
            groupsAfterUpdate: d,
            usersAdded: m,
            usersAfterUpdate: p,
          })));
      }
      var _ = o("WAWebLabelCollection").LabelCollection.get("" + l);
      if (_ != null) {
        var f = e(_.type);
        (f != null && (u.listType = f),
          _.predefinedId != null && (u.predefinedId = _.predefinedId));
      }
      var g = new (o("WAWebListUpdateWamEvent").ListUpdateWamEvent)(u);
      g.commit();
    }
    ((l.getListType = e),
      (l.logListUpdateUserJorney = s),
      (l.logListUpdate = u));
  },
  98,
);
