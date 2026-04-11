__d(
  "WAWebWamSmbListEventReporter",
  [
    "WAWebLabelCollection",
    "WAWebListsGatingUtils",
    "WAWebListsLogging",
    "WAWebMobilePlatforms",
    "WAWebSmbListEventWamEvent",
    "WAWebWamEnumListType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (
        !(
          !o("WAWebMobilePlatforms").isSMB() ||
          !o("WAWebListsGatingUtils").isListsEnabled()
        )
      ) {
        var t = new (o("WAWebSmbListEventWamEvent").SmbListEventWamEvent)(e);
        t.commit();
      }
    }
    function s(t) {
      var n = t.bulkLabeling,
        r = t.currentListState,
        a = t.customListTitle,
        i = t.entryPointConversionSource,
        l = t.labelOperation,
        s = t.labelTarget,
        u = t.lastMessageDirection,
        c = t.listId,
        d = t.listIndex,
        m = t.listsApplied,
        p = t.listsRemoved,
        _ = t.messageDepth,
        f = t.predefinedId,
        g = t.threadIdHmac,
        h = t.updateEntryPoint,
        y = { labelOperation: l };
      if (
        (h != null && (y.updateEntryPoint = h),
        s != null && (y.labelTarget = s),
        g != null && (y.threadIdHmac = g),
        d != null && (y.listIndex = d),
        r != null && (y.currentListState = r),
        n != null && (y.bulkLabeling = n),
        a != null && (y.customListTitle = a),
        m != null && (y.listsApplied = m),
        p != null && (y.listsRemoved = p),
        i != null && (y.entryPointConversionSource = i),
        _ != null && (y.messageDepth = _),
        u != null && (y.lastMessageDirection = u),
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
        e(y));
    }
    l.logSmbListEvent = s;
  },
  98,
);
