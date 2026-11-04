__d(
  "WAWebContactsAndGroupsLists",
  ["WAWebListUtils"],
  function (t, n, r, o, a, i, l) {
    var e = [
      "add",
      "remove",
      "reset",
      "reorder",
      "change:isActive",
      "change:name",
    ];
    function s(e) {
      return (
        e.name !== "" &&
        e.isActive !== !1 &&
        !o("WAWebListUtils").isBuiltInList(e.type)
      );
    }
    ((l.LIST_COLLECTION_EVENTS = e), (l.isVisibleList = s));
  },
  98,
);
