__d(
  "WAWebWamSmbListEventReporter",
  [
    "WAWebGetSharedSessionId",
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
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
      if (
        !(
          !o("WAWebMobilePlatforms").isSMB() ||
          !o("WAWebListsGatingUtils").isListsEnabled()
        )
      ) {
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
        i = e.labelOperation,
        l = e.labelTarget,
        s = e.lastMessageDirection,
        c = e.listId,
        d = e.listIndex,
        m = e.listsApplied,
        p = e.listsRemoved,
        _ = e.messageDepth,
        f = e.predefinedId,
        g = e.threadIdHmac,
        h = e.updateEntryPoint,
        y = { labelOperation: i };
      if (
        (h != null && (y.updateEntryPoint = h),
        l != null && (y.labelTarget = l),
        g != null && (y.threadIdHmac = g),
        d != null && (y.listIndex = d),
        n != null && (y.currentListState = n),
        t != null && (y.bulkLabeling = t),
        r != null && (y.customListTitle = r),
        m != null && (y.listsApplied = m),
        p != null && (y.listsRemoved = p),
        a != null && (y.entryPointConversionSource = a),
        _ != null && (y.messageDepth = _),
        s != null && (y.lastMessageDirection = s),
        c != null)
      ) {
        y.listId = c;
        var C = o("WAWebLabelCollection").LabelCollection.get(String(c));
        if (C != null) {
          var b = o("WAWebListsLogging").getListType(C.type);
          if (
            (b != null && (y.listType = b),
            C.predefinedId != null && (y.predefinedId = C.predefinedId),
            d == null)
          ) {
            var v = o("WAWebLabelCollection").LabelCollection.getActiveLists(),
              S = v.findIndex(function (e) {
                return e.id === String(c);
              });
            S >= 0 && (y.listIndex = S);
          }
        }
      }
      (f != null && y.predefinedId == null && (y.predefinedId = f),
        y.predefinedId != null &&
          y.predefinedId > 0 &&
          (y.listType = o("WAWebWamEnumListType").LIST_TYPE.PREDEFINED),
        u(y));
    }
    l.logSmbListEvent = c;
  },
  98,
);
