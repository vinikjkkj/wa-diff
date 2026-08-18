__d(
  "WAWebWindowsHybridBridge.v2633",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2633",
    "WAWebWindowsHybridBridgeAbProps.v2633",
    "WAWebWindowsHybridBridgeAdv.v2633",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2633",
    "WAWebWindowsHybridBridgeConnection.v2633",
    "WAWebWindowsHybridBridgeContacts.v2633",
    "WAWebWindowsHybridBridgeDebugFeatures.v2633",
    "WAWebWindowsHybridBridgeLinksPreview.v2633",
    "WAWebWindowsHybridBridgeMediaFiles.v2633",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2633",
    "WAWebWindowsHybridBridgeMetaConfig.v2633",
    "WAWebWindowsHybridBridgeNativeAppState.v2633",
    "WAWebWindowsHybridBridgeOds.v2633",
    "WAWebWindowsHybridBridgePictures.v2633",
    "WAWebWindowsHybridBridgePreferences.v2633",
    "WAWebWindowsHybridBridgeRateTheApp.v2633",
    "WAWebWindowsHybridBridgeRingtone.v2633",
    "WAWebWindowsHybridBridgeScalingControl.v2633",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2633",
    "WAWebWindowsHybridBridgeSharesheet.v2633",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2633",
    "WAWebWindowsHybridBridgeTouchpadFix.v2633",
    "WAWebWindowsHybridBridgeVoip.v2633",
    "WAWebWindowsHybridBridgeWam.v2633",
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
            "WAWebWindowsHybridBridgeAbProps.v2633",
          ).WindowsHybridBridgeAbProps_v2633)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2633",
          ).WindowsHybridBridgeWam_v2633)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2633",
          ).WindowsHybridBridgePreferences_v2633)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2633",
          ).WindowsHybridBridgeScalingControl_v2633)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2633",
          ).WindowsHybridBridgeOds_v2633)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2633",
          ).WindowsHybridBridgePictures_v2633)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2633",
            ).WindowsHybridBridgeDebugFeatures_v2633)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2633",
          ).VoipWinRTBridge_v2633)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2633",
          ).WAWebWindowsHybridBridgeRateTheApp_v2633)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2633",
          ).WindowsHybridBridgeConnection_v2633)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2633",
          ).WindowsHybridBridgeTouchpadFix_v2633)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2633",
          ).WindowsHybridBridgeLinksPreview_v2633)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2633",
            ).WindowsHybridBridgeContacts_v2633)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2633",
            ).WindowsHybridBridgeContacts_v2633)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2633",
          ).WAWebWindowsHybridBridgeMediaFiles_v2633)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2633",
          ).WAWebWindowsHybridBridgeSharesheet_v2633)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2633",
          ).WindowsHybridAppActivationBridge_v2633)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2633",
          ).WindowsHybridBridgeNativeAppState_v2633)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2633",
          ).WindowsHybridBridgeSystemIntegrations_v2633)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2633",
          ).WindowsHybridBridgeBrowserExtensions_v2633)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2633",
          ).WindowsHybridBridgeSeamlessMigration_v2633)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2633",
          ).WindowsHybridBridgeMediaTranscoder_v2633)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2633",
          ).WindowsHybridBridgeAdv_v2633)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2633",
          ).WindowsHybridBridgeRingtone_v2633)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2633",
          ).WindowsHybridBridgeMetaConfig_v2633)(I)),
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
    l.WindowsHybridBridge_v2633 = e;
  },
  98,
);
