__d(
  "WAWebWindowsHybridBridge.v2641",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2641",
    "WAWebWindowsHybridBridgeAbProps.v2641",
    "WAWebWindowsHybridBridgeAdv.v2641",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2641",
    "WAWebWindowsHybridBridgeConnection.v2641",
    "WAWebWindowsHybridBridgeContacts.v2641",
    "WAWebWindowsHybridBridgeDebugFeatures.v2641",
    "WAWebWindowsHybridBridgeLinksPreview.v2641",
    "WAWebWindowsHybridBridgeMediaFiles.v2641",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2641",
    "WAWebWindowsHybridBridgeMetaConfig.v2641",
    "WAWebWindowsHybridBridgeNativeAppState.v2641",
    "WAWebWindowsHybridBridgeOds.v2641",
    "WAWebWindowsHybridBridgePictures.v2641",
    "WAWebWindowsHybridBridgePreferences.v2641",
    "WAWebWindowsHybridBridgeRateTheApp.v2641",
    "WAWebWindowsHybridBridgeRingtone.v2641",
    "WAWebWindowsHybridBridgeScalingControl.v2641",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2641",
    "WAWebWindowsHybridBridgeSharesheet.v2641",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2641",
    "WAWebWindowsHybridBridgeTouchpadFix.v2641",
    "WAWebWindowsHybridBridgeVoip.v2641",
    "WAWebWindowsHybridBridgeWam.v2641",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2641",
          ).WindowsHybridBridgeAbProps_v2641)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2641",
          ).WindowsHybridBridgeWam_v2641)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2641",
          ).WindowsHybridBridgePreferences_v2641)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2641",
          ).WindowsHybridBridgeScalingControl_v2641)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2641",
          ).WindowsHybridBridgeOds_v2641)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2641",
          ).WindowsHybridBridgePictures_v2641)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2641",
            ).WindowsHybridBridgeDebugFeatures_v2641)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2641",
          ).VoipWinRTBridge_v2641)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2641",
          ).WAWebWindowsHybridBridgeRateTheApp_v2641)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2641",
          ).WindowsHybridBridgeConnection_v2641)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2641",
          ).WindowsHybridBridgeTouchpadFix_v2641)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2641",
          ).WindowsHybridBridgeLinksPreview_v2641)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2641",
            ).WindowsHybridBridgeContacts_v2641)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2641",
            ).WindowsHybridBridgeContacts_v2641)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2641",
          ).WAWebWindowsHybridBridgeMediaFiles_v2641)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2641",
          ).WAWebWindowsHybridBridgeSharesheet_v2641)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2641",
          ).WindowsHybridAppActivationBridge_v2641)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2641",
          ).WindowsHybridBridgeNativeAppState_v2641)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2641",
          ).WindowsHybridBridgeSystemIntegrations_v2641)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2641",
          ).WindowsHybridBridgeBrowserExtensions_v2641)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2641",
          ).WindowsHybridBridgeSeamlessMigration_v2641)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2641",
          ).WindowsHybridBridgeMediaTranscoder_v2641)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2641",
          ).WindowsHybridBridgeAdv_v2641)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2641",
          ).WindowsHybridBridgeRingtone_v2641)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2641",
          ).WindowsHybridBridgeMetaConfig_v2641)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2641 = e;
  },
  98,
);
