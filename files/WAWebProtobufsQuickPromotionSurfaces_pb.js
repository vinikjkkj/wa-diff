__d(
  "WAWebProtobufsQuickPromotionSurfaces.pb",
  ["$InternalEnum", "WAProtoConst"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({ TRUE: 1, FALSE: 2, UNKNOWN: 3 }),
      u = n("$InternalEnum")({ PASS_BY_DEFAULT: 1, FAIL_BY_DEFAULT: 2 }),
      c = n("$InternalEnum")({ AND: 1, OR: 2, NOR: 3 }),
      d = {},
      m = {},
      p = {},
      _ = {};
    ((d.name = "QP"),
      (d.internalSpec = {}),
      (m.name = "QP$FilterClause"),
      (m.internalSpec = {
        clauseType: [
          1,
          (e = o("WAProtoConst")).FLAGS.REQUIRED | e.TYPES.ENUM,
          c,
        ],
        clauses: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, m],
        filters: [3, e.FLAGS.REPEATED | e.TYPES.MESSAGE, p],
      }),
      (p.name = "QP$Filter"),
      (p.internalSpec = {
        filterName: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        parameters: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, _],
        filterResult: [3, e.TYPES.ENUM, s],
        clientNotSupportedConfig: [4, e.FLAGS.REQUIRED | e.TYPES.ENUM, u],
      }),
      (_.name = "QP$FilterParameters"),
      (_.internalSpec = {
        key: [1, e.TYPES.STRING],
        value: [2, e.TYPES.STRING],
      }),
      (l.QP$FilterResult = s),
      (l.QP$FilterClientNotSupportedConfig = u),
      (l.QP$ClauseType = c),
      (l.QPSpec = d),
      (l.QP$FilterClauseSpec = m),
      (l.QP$FilterSpec = p),
      (l.QP$FilterParametersSpec = _));
  },
  98,
);
