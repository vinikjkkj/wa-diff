__d(
  "WAWebBulletedListItemFormatRegex",
  [],
  function (t, n, r, o, a, i) {
    var e = /(?:^)[\*\u2022]( (?! +)[^\n]+(?:$))/gm,
      l = /(?:^)\-( (?! +)[^\n]+(?:$))/gm;
    ((i.BULLETED_LIST_ITEM_REGEX = e), (i.HYPHEN_LIST_ITEM_REGEX = l));
  },
  66,
);
