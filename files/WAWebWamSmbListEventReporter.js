__d(
  "WAWebWamSmbListEventReporter",
  [
    "WAWebGetSharedSessionId",
    "WAWebLabelCollection",
    "WAWebListsLogging",
    "WAWebMobilePlatforms",
    "WAWebSmbListEventWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumListType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s =
        (e = o("WAWebUnifiedSession").UnifiedSessionManager.getSessionId()) !=
        null
          ? e
          : o("WAWebGetSharedSessionId").getSharedSessionId();
    function u(e) {
      if (o("WAWebMobilePlatforms").isSMB()) {
        e.appSessionId = s;
        var t = new (o("WAWebSmbListEventWamEvent").SmbListEventWamEvent)(e);
        t.commit();
      }
    }
    function c(e) {
      var t = e.bulkLabeling,
        n = e.currentListState,
        r = e.customListTitle,
        a = e.entryPointConversionSource,
        i = e.extraAttributes,
        l = e.labelOperation,
        s = e.labelTarget,
        c = e.lastMessageDirection,
        d = e.listId,
        m = e.listIndex,
        p = e.listsApplied,
        _ = e.listsRemoved,
        f = e.messageDepth,
        g = e.predefinedId,
        h = e.smbListFeatureName,
        y = e.smbListSurface,
        C = e.threadIdHmac,
        b = e.updateEntryPoint,
        v = e.userActionTarget,
        S = { labelOperation: l };
      if (
        (b != null && (S.updateEntryPoint = b),
        s != null && (S.labelTarget = s),
        C != null && (S.threadIdHmac = C),
        m != null && (S.listIndex = m),
        n != null && (S.currentListState = n),
        i != null && (S.extraAttributes = i),
        t != null && (S.bulkLabeling = t),
        r != null && (S.customListTitle = r),
        p != null && (S.listsApplied = p),
        _ != null && (S.listsRemoved = _),
        a != null && (S.entryPointConversionSource = a),
        f != null && (S.messageDepth = f),
        c != null && (S.lastMessageDirection = c),
        h != null && (S.smbListFeatureName = h),
        y != null && (S.smbListSurface = y),
        v != null && (S.userActionTarget = v),
        d != null)
      ) {
        S.listId = d;
        var R = o("WAWebLabelCollection").LabelCollection.get(String(d));
        if (R != null) {
          var L = o("WAWebListsLogging").getListType(R.type);
          if (
            (L != null && (S.listType = L),
            R.predefinedId != null && (S.predefinedId = R.predefinedId),
            m == null)
          ) {
            var E = o("WAWebLabelCollection").LabelCollection.getActiveLists(),
              k = E.findIndex(function (e) {
                return e.id === String(d);
              });
            k >= 0 && (S.listIndex = k);
          }
        }
      }
      (g != null && S.predefinedId == null && (S.predefinedId = g),
        S.predefinedId != null &&
          S.predefinedId > 0 &&
          (S.listType = o("WAWebWamEnumListType").LIST_TYPE.PREDEFINED),
        u(S));
    }
    l.logSmbListEvent = c;
  },
  98,
);
