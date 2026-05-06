export const DEFAULT_PRESETS = [
  {
    "id": "preset_001",
    "name": "自社エゴサーチ",
    "description": "自社名や商品名に関する最近の言及をオリジナル投稿で抽出",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "自社名や商品名",
    "query_template": "{keyword} -filter:retweets lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_002",
    "name": "競合ブランド比較",
    "description": "自社と競合ブランドの評判を直接比較した投稿を探す",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "自社ブランド",
    "query_template": "({keyword} OR {competitor}) (比較 OR どっち OR 違い OR 勝ち) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_003",
    "name": "UX不満抽出",
    "description": "アプリやサービスの使いづらさ・不満を訴える投稿を収集",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "アプリ名やサービス名",
    "query_template": "{keyword} (使いにくい OR バグ OR 遅い OR クラッシュ OR 最悪) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_004",
    "name": "高評価口コミ",
    "description": "商品やサービスを絶賛する高いいいね投稿を抽出",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "商品名",
    "query_template": "{keyword} (最高 OR 神 OR ありがとう OR おすすめ) min_faves:50 lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_005",
    "name": "バズ投稿監視",
    "description": "指定キーワードで急に拡散しているバズ投稿を検知",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "トレンドキーワード",
    "query_template": "{keyword} min_faves:500 lang:ja -filter:retweets -bot since:2026-04-01"
  },
  {
    "id": "preset_006",
    "name": "転職・求人情報",
    "description": "指定企業の採用や転職関連のリアルな声を集める",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "企業名",
    "query_template": "{keyword} (採用 OR 転職 OR 中途 OR 入社 OR 働いてる) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_007",
    "name": "炎上検知アラート",
    "description": "ネガティブワードと組み合わせた急激な批判投稿を監視",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "商品名やサービス名",
    "query_template": "{keyword} (最悪 OR 詐欺 OR やめろ OR 返金) min_faves:30 lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_008",
    "name": "トレンドハッシュタグ",
    "description": "指定ハッシュタグのリアルタイム拡散状況を把握",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ハッシュタグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_009",
    "name": "競合不満分析",
    "description": "競合商品に対するユーザーの不満点を詳細に抽出",
    "tags": [
      "競合分析",
      "UX/不満抽出"
    ],
    "input_placeholder": "競合ブランド名",
    "query_template": "{keyword} (不満 OR 文句 OR 微妙 OR 失敗) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_010",
    "name": "推し活課金意欲",
    "description": "ファンによる有料コンテンツやグッズへの課金意欲投稿を集める",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "作品名やアーティスト名",
    "query_template": "{keyword} (課金 OR 有料でも OR 買うから OR 支援) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_011",
    "name": "自社アカウント言及",
    "description": "自社公式アカウントへのメンションをオリジナルで抽出",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "@アカウント名",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_012",
    "name": "新商品口コミ",
    "description": "新発売商品の初速口コミを高評価・低評価両方で確認",
    "tags": [
      "高評価抽出",
      "UX/不満抽出"
    ],
    "input_placeholder": "新商品名",
    "query_template": "{keyword} (買った OR 届いた OR 使ってみた) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_013",
    "name": "採用候補者検索",
    "description": "指定職種で積極的に転職活動中の投稿を探す",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "職種キーワード",
    "query_template": "{keyword} (転職希望 OR 次の職場 OR エンジニア募集) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_014",
    "name": "ネガティブバズ監視",
    "description": "キーワード関連のネガティブ投稿がバズっていないか確認",
    "tags": [
      "炎上検知",
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名",
    "query_template": "{keyword} (悪い OR 酷い OR 失望) min_faves:100 lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_015",
    "name": "競合キャンペーン分析",
    "description": "競合が実施中のキャンペーンに対する反応を分析",
    "tags": [
      "競合分析",
      "トレンド分析"
    ],
    "input_placeholder": "競合ブランド",
    "query_template": "{keyword} (キャンペーン OR セール OR 割引) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_016",
    "name": "UI/UX改善ヒント",
    "description": "類似サービスに対する具体的なUI改善要望を収集",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "サービスカテゴリ",
    "query_template": "{keyword} (UI OR UX OR デザイン) (改善 OR 直して OR 欲しい) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_017",
    "name": "高エンゲージ投稿",
    "description": "指定トピックで高いいいね・RTを獲得した投稿を抽出",
    "tags": [
      "バズ投稿",
      "高評価抽出"
    ],
    "input_placeholder": "トピックキーワード",
    "query_template": "{keyword} min_faves:200 lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_018",
    "name": "退職・クチコミ",
    "description": "企業からの退職者によるリアルな内部クチコミ",
    "tags": [
      "採用・転職",
      "UX/不満抽出"
    ],
    "input_placeholder": "企業名",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_019",
    "name": "炎上キーワード監視",
    "description": "炎上しやすいキーワードの急増を早期検知",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "敏感キーワード",
    "query_template": "{keyword} (叩き OR 炎上 OR 謝罪) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_020",
    "name": "季節トレンド把握",
    "description": "指定時期に関連する話題の盛り上がりを分析",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "季節イベント名",
    "query_template": "{keyword} since:2026-04-01 lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_021",
    "name": "ブランドイメージ調査",
    "description": "自社ブランドに対する総合的なイメージ投稿を収集",
    "tags": [
      "エゴサーチ",
      "競合分析"
    ],
    "input_placeholder": "ブランド名",
    "query_template": "{keyword} (イメージ OR 印象 OR 好き OR 嫌い) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_022",
    "name": "競合強み分析",
    "description": "競合商品が優れていると評価されるポイントを抽出",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "競合商品名",
    "query_template": "{keyword} (すごい OR 優秀 OR 勝ってる) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_023",
    "name": "アプリ不具合報告",
    "description": "特定アプリの不具合やバグ報告投稿をリアルタイム収集",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "アプリ名",
    "query_template": "{keyword} (不具合 OR エラー OR 落ちる OR 起動しない) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_024",
    "name": "神対応口コミ",
    "description": "企業のカスタマーサポートが高評価された投稿を探す",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "企業名",
    "query_template": "{keyword} (神対応 OR 迅速 OR 丁寧) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_025",
    "name": "話題急上昇検知",
    "description": "指定キーワードの急激な言及増加を検知",
    "tags": [
      "バズ投稿",
      "トレンド分析"
    ],
    "input_placeholder": "キーワード",
    "query_template": "{keyword} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_026",
    "name": "エンジニア転職市場",
    "description": "ITエンジニアの転職市場や年収に関する生の声",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "技術キーワード",
    "query_template": "{keyword} (年収 OR 転職 OR リモート) (エンジニア OR 開発) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_027",
    "name": "批判早期警戒",
    "description": "ブランドに対する批判の初期兆候を素早くキャッチ",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名",
    "query_template": "{keyword} (不満 OR クレーム OR 失望) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_028",
    "name": "ハッシュタグ効果測定",
    "description": "自社キャンペーンハッシュタグの拡散状況を測定",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "#キャンペーンタグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_029",
    "name": "商品比較検索",
    "description": "自社商品と他社商品のユーザー比較投稿を集める",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "自社商品",
    "query_template": "{keyword} (vs OR 比較 OR 対抗) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_030",
    "name": "機能要望収集",
    "description": "ユーザーが求める新機能や改善要望を抽出",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "サービス名",
    "query_template": "{keyword} (機能 OR 追加 OR 欲しい OR 要望) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_031",
    "name": "感動体験口コミ",
    "description": "商品やサービスでユーザーが感動した体験談",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "商品カテゴリ",
    "query_template": "{keyword} (感動 OR 泣いた OR 最高の) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_032",
    "name": "viral投稿発見",
    "description": "指定トピックでviral（爆発的拡散）した投稿を探す",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "トピック",
    "query_template": "{keyword} min_faves:1000 lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_033",
    "name": "新卒採用声",
    "description": "新卒入社した人のリアルな声や感想を集める",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "企業名",
    "query_template": "{keyword} (新卒 OR 内定 OR 入社) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_034",
    "name": "謝罪要求監視",
    "description": "企業に対する謝罪や対応要求の高まりを検知",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "企業名",
    "query_template": "{keyword} (謝罪 OR 対応しろ OR 責任) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_035",
    "name": "週間トレンドまとめ",
    "description": "1週間以内の指定分野トレンド投稿をまとめて抽出",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "分野キーワード",
    "query_template": "{keyword} since:2026-04-27 lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_036",
    "name": "ネガティブエゴサーチ",
    "description": "自社に対するネガティブな言及のみを抽出",
    "tags": [
      "エゴサーチ",
      "炎上検知"
    ],
    "input_placeholder": "自社名",
    "query_template": "{keyword} (悪い OR 微妙 OR 失敗 OR やばい) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_037",
    "name": "競合価格反応",
    "description": "競合の価格変更やセールに対するユーザー反応",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "競合ブランド",
    "query_template": "{keyword} (安い OR 高い OR コスパ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_038",
    "name": "アクセシビリティ不満",
    "description": "アプリやサイトのアクセシビリティに関する不満",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "サービス名",
    "query_template": "{keyword} (見にくい OR 操作しにくい OR 音声) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_039",
    "name": "リピート購入声",
    "description": "商品のリピート購入や継続利用を表明する投稿",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "商品名",
    "query_template": "{keyword} (また買う OR リピート OR 継続) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_040",
    "name": "話題人物検索",
    "description": "指定人物に関する最新の話題投稿を収集",
    "tags": [
      "バズ投稿",
      "トレンド分析"
    ],
    "input_placeholder": "人物名",
    "query_template": "{keyword} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_041",
    "name": "福利厚生口コミ",
    "description": "企業の福利厚生や社内制度に関するリアル口コミ",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "企業名",
    "query_template": "{keyword} (福利 OR 休暇 OR 在宅 OR 手当) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_042",
    "name": "ボイコット動き",
    "description": "商品やブランドに対するボイコット・不買運動の兆候",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名",
    "query_template": "{keyword} (ボイコット OR 不買 OR 買わない) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_043",
    "name": "イベント反響分析",
    "description": "指定イベント開催後のユーザー反響をまとめて把握",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "イベント名",
    "query_template": "{keyword} (参加 OR 行った OR 感想) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_044",
    "name": "公式アカウント評価",
    "description": "自社公式アカウントの運用に対する評価投稿",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "@自社アカウント",
    "query_template": "{account} (良い OR 悪い OR フォロー) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_045",
    "name": "競合ユーザー層",
    "description": "競合商品を利用しているユーザーの属性や声",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "競合商品",
    "query_template": "{keyword} (使ってる OR 愛用 OR ファン) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_046",
    "name": "モバイルアプリ評価",
    "description": "モバイルアプリの使い勝手と評価を包括的に集める",
    "tags": [
      "UX/不満抽出",
      "高評価抽出"
    ],
    "input_placeholder": "アプリ名",
    "query_template": "{keyword} (アプリ OR iOS OR Android) (便利 OR 使いやすい OR 不便) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_047",
    "name": "おすすめ投稿抽出",
    "description": "ユーザーが他者に強くおすすめしている投稿",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "商品カテゴリ",
    "query_template": "{keyword} (おすすめ OR 推し OR 買って) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_048",
    "name": "急拡散キーワード",
    "description": "急に話題になり始めたキーワードの投稿を捕捉",
    "tags": [
      "バズ投稿",
      "トレンド分析"
    ],
    "input_placeholder": "キーワード",
    "query_template": "{keyword} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_049",
    "name": "面接・選考体験",
    "description": "企業の面接や選考プロセスに関する体験談",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "企業名",
    "query_template": "{keyword} (面接 OR 選考 OR ES) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_050",
    "name": "危機管理モニタリング",
    "description": "ブランド危機につながるネガティブ投稿の早期発見",
    "tags": [
      "炎上検知",
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名",
    "query_template": "{keyword} (問題 OR 事故 OR 被害 OR 苦情) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_051",
    "name": "日常使い満足度 - エゴサーチ",
    "description": "商品の日常利用における満足・不満を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_052",
    "name": "日常使い満足度 - 競合分析",
    "description": "商品の日常利用における満足・不満を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (日常 OR 毎日 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_053",
    "name": "日常使い満足度 - UX/不満抽出",
    "description": "商品の日常利用における満足・不満を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_054",
    "name": "日常使い満足度 - 高評価抽出",
    "description": "商品の日常利用における満足・不満を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_055",
    "name": "日常使い満足度 - バズ投稿",
    "description": "商品の日常利用における満足・不満を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_056",
    "name": "日常使い満足度 - 採用・転職",
    "description": "商品の日常利用における満足・不満を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_057",
    "name": "日常使い満足度 - 炎上検知",
    "description": "商品の日常利用における満足・不満を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_058",
    "name": "日常使い満足度 - トレンド分析",
    "description": "商品の日常利用における満足・不満を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_059",
    "name": "価格・コスパ - エゴサーチ",
    "description": "価格やコストパフォーマンスへの反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_060",
    "name": "価格・コスパ - 競合分析",
    "description": "価格やコストパフォーマンスへの反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (価格 OR コスパ OR 高い OR 安い OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_061",
    "name": "価格・コスパ - UX/不満抽出",
    "description": "価格やコストパフォーマンスへの反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_062",
    "name": "価格・コスパ - 高評価抽出",
    "description": "価格やコストパフォーマンスへの反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_063",
    "name": "価格・コスパ - バズ投稿",
    "description": "価格やコストパフォーマンスへの反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_064",
    "name": "価格・コスパ - 採用・転職",
    "description": "価格やコストパフォーマンスへの反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_065",
    "name": "価格・コスパ - 炎上検知",
    "description": "価格やコストパフォーマンスへの反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_066",
    "name": "価格・コスパ - トレンド分析",
    "description": "価格やコストパフォーマンスへの反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_067",
    "name": "新機能反応 - エゴサーチ",
    "description": "新機能やアップデートに対する反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_068",
    "name": "新機能反応 - 競合分析",
    "description": "新機能やアップデートに対する反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (新機能 OR アップデート OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_069",
    "name": "新機能反応 - UX/不満抽出",
    "description": "新機能やアップデートに対する反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_070",
    "name": "新機能反応 - 高評価抽出",
    "description": "新機能やアップデートに対する反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_071",
    "name": "新機能反応 - バズ投稿",
    "description": "新機能やアップデートに対する反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_072",
    "name": "新機能反応 - 採用・転職",
    "description": "新機能やアップデートに対する反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_073",
    "name": "新機能反応 - 炎上検知",
    "description": "新機能やアップデートに対する反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_074",
    "name": "新機能反応 - トレンド分析",
    "description": "新機能やアップデートに対する反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_075",
    "name": "キャンペーン反応 - エゴサーチ",
    "description": "キャンペーン施策への反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_076",
    "name": "キャンペーン反応 - 競合分析",
    "description": "キャンペーン施策への反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (キャンペーン OR セール OR クーポン OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_077",
    "name": "キャンペーン反応 - UX/不満抽出",
    "description": "キャンペーン施策への反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_078",
    "name": "キャンペーン反応 - 高評価抽出",
    "description": "キャンペーン施策への反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_079",
    "name": "キャンペーン反応 - バズ投稿",
    "description": "キャンペーン施策への反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_080",
    "name": "キャンペーン反応 - 採用・転職",
    "description": "キャンペーン施策への反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_081",
    "name": "キャンペーン反応 - 炎上検知",
    "description": "キャンペーン施策への反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_082",
    "name": "キャンペーン反応 - トレンド分析",
    "description": "キャンペーン施策への反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_083",
    "name": "サポート対応 - エゴサーチ",
    "description": "サポート品質への評価を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_084",
    "name": "サポート対応 - 競合分析",
    "description": "サポート品質への評価を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (サポート OR 問い合わせ OR 対応 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_085",
    "name": "サポート対応 - UX/不満抽出",
    "description": "サポート品質への評価を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_086",
    "name": "サポート対応 - 高評価抽出",
    "description": "サポート品質への評価を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_087",
    "name": "サポート対応 - バズ投稿",
    "description": "サポート品質への評価を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_088",
    "name": "サポート対応 - 採用・転職",
    "description": "サポート品質への評価を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_089",
    "name": "サポート対応 - 炎上検知",
    "description": "サポート品質への評価を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_090",
    "name": "サポート対応 - トレンド分析",
    "description": "サポート品質への評価を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_091",
    "name": "ログイン問題 - エゴサーチ",
    "description": "ログイン・認証関連の問題を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_092",
    "name": "ログイン問題 - 競合分析",
    "description": "ログイン・認証関連の問題を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (ログイン OR 認証 OR アカウント OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_093",
    "name": "ログイン問題 - UX/不満抽出",
    "description": "ログイン・認証関連の問題を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_094",
    "name": "ログイン問題 - 高評価抽出",
    "description": "ログイン・認証関連の問題を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_095",
    "name": "ログイン問題 - バズ投稿",
    "description": "ログイン・認証関連の問題を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_096",
    "name": "ログイン問題 - 採用・転職",
    "description": "ログイン・認証関連の問題を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_097",
    "name": "ログイン問題 - 炎上検知",
    "description": "ログイン・認証関連の問題を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_098",
    "name": "ログイン問題 - トレンド分析",
    "description": "ログイン・認証関連の問題を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_099",
    "name": "配送・納期 - エゴサーチ",
    "description": "配送や納期に関する問題を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_100",
    "name": "配送・納期 - 競合分析",
    "description": "配送や納期に関する問題を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (配送 OR 届かない OR 遅延 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_101",
    "name": "配送・納期 - UX/不満抽出",
    "description": "配送や納期に関する問題を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_102",
    "name": "配送・納期 - 高評価抽出",
    "description": "配送や納期に関する問題を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_103",
    "name": "配送・納期 - バズ投稿",
    "description": "配送や納期に関する問題を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_104",
    "name": "配送・納期 - 採用・転職",
    "description": "配送や納期に関する問題を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_105",
    "name": "配送・納期 - 炎上検知",
    "description": "配送や納期に関する問題を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_106",
    "name": "配送・納期 - トレンド分析",
    "description": "配送や納期に関する問題を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_107",
    "name": "アプリ動作 - エゴサーチ",
    "description": "アプリの安定性や不具合を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_108",
    "name": "アプリ動作 - 競合分析",
    "description": "アプリの安定性や不具合を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (アプリ OR エラー OR 落ちる OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_109",
    "name": "アプリ動作 - UX/不満抽出",
    "description": "アプリの安定性や不具合を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_110",
    "name": "アプリ動作 - 高評価抽出",
    "description": "アプリの安定性や不具合を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_111",
    "name": "アプリ動作 - バズ投稿",
    "description": "アプリの安定性や不具合を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_112",
    "name": "アプリ動作 - 採用・転職",
    "description": "アプリの安定性や不具合を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_113",
    "name": "アプリ動作 - 炎上検知",
    "description": "アプリの安定性や不具合を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_114",
    "name": "アプリ動作 - トレンド分析",
    "description": "アプリの安定性や不具合を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_115",
    "name": "UIデザイン - エゴサーチ",
    "description": "UI/デザインへの評価を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_116",
    "name": "UIデザイン - 競合分析",
    "description": "UI/デザインへの評価を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (UI OR デザイン OR 見にくい OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_117",
    "name": "UIデザイン - UX/不満抽出",
    "description": "UI/デザインへの評価を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_118",
    "name": "UIデザイン - 高評価抽出",
    "description": "UI/デザインへの評価を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_119",
    "name": "UIデザイン - バズ投稿",
    "description": "UI/デザインへの評価を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_120",
    "name": "UIデザイン - 採用・転職",
    "description": "UI/デザインへの評価を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_121",
    "name": "UIデザイン - 炎上検知",
    "description": "UI/デザインへの評価を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_122",
    "name": "UIデザイン - トレンド分析",
    "description": "UI/デザインへの評価を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_123",
    "name": "レビュー・口コミ - エゴサーチ",
    "description": "レビュー・口コミ投稿を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_124",
    "name": "レビュー・口コミ - 競合分析",
    "description": "レビュー・口コミ投稿を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (レビュー OR 口コミ OR 評判 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_125",
    "name": "レビュー・口コミ - UX/不満抽出",
    "description": "レビュー・口コミ投稿を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_126",
    "name": "レビュー・口コミ - 高評価抽出",
    "description": "レビュー・口コミ投稿を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_127",
    "name": "レビュー・口コミ - バズ投稿",
    "description": "レビュー・口コミ投稿を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_128",
    "name": "レビュー・口コミ - 採用・転職",
    "description": "レビュー・口コミ投稿を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_129",
    "name": "レビュー・口コミ - 炎上検知",
    "description": "レビュー・口コミ投稿を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_130",
    "name": "レビュー・口コミ - トレンド分析",
    "description": "レビュー・口コミ投稿を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_131",
    "name": "採用広報 - エゴサーチ",
    "description": "採用広報・選考体験の声を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_132",
    "name": "採用広報 - 競合分析",
    "description": "採用広報・選考体験の声を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (採用広報 OR 面接 OR 選考 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_133",
    "name": "採用広報 - UX/不満抽出",
    "description": "採用広報・選考体験の声を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_134",
    "name": "採用広報 - 高評価抽出",
    "description": "採用広報・選考体験の声を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_135",
    "name": "採用広報 - バズ投稿",
    "description": "採用広報・選考体験の声を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_136",
    "name": "採用広報 - 採用・転職",
    "description": "採用広報・選考体験の声を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_137",
    "name": "採用広報 - 炎上検知",
    "description": "採用広報・選考体験の声を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_138",
    "name": "採用広報 - トレンド分析",
    "description": "採用広報・選考体験の声を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_139",
    "name": "退職・離職 - エゴサーチ",
    "description": "退職者・離職者の声を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_140",
    "name": "退職・離職 - 競合分析",
    "description": "退職者・離職者の声を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (退職 OR 辞めた OR 元社員 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_141",
    "name": "退職・離職 - UX/不満抽出",
    "description": "退職者・離職者の声を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_142",
    "name": "退職・離職 - 高評価抽出",
    "description": "退職者・離職者の声を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_143",
    "name": "退職・離職 - バズ投稿",
    "description": "退職者・離職者の声を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_144",
    "name": "退職・離職 - 採用・転職",
    "description": "退職者・離職者の声を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_145",
    "name": "退職・離職 - 炎上検知",
    "description": "退職者・離職者の声を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_146",
    "name": "退職・離職 - トレンド分析",
    "description": "退職者・離職者の声を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_147",
    "name": "セキュリティ - エゴサーチ",
    "description": "セキュリティに関する懸念を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_148",
    "name": "セキュリティ - 競合分析",
    "description": "セキュリティに関する懸念を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (セキュリティ OR 漏洩 OR 脆弱 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_149",
    "name": "セキュリティ - UX/不満抽出",
    "description": "セキュリティに関する懸念を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_150",
    "name": "セキュリティ - 高評価抽出",
    "description": "セキュリティに関する懸念を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_151",
    "name": "セキュリティ - バズ投稿",
    "description": "セキュリティに関する懸念を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_152",
    "name": "セキュリティ - 採用・転職",
    "description": "セキュリティに関する懸念を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_153",
    "name": "セキュリティ - 炎上検知",
    "description": "セキュリティに関する懸念を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_154",
    "name": "セキュリティ - トレンド分析",
    "description": "セキュリティに関する懸念を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_155",
    "name": "プライバシー - エゴサーチ",
    "description": "個人情報やプライバシーの不安を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_156",
    "name": "プライバシー - 競合分析",
    "description": "個人情報やプライバシーの不安を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (プライバシー OR 個人情報 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_157",
    "name": "プライバシー - UX/不満抽出",
    "description": "個人情報やプライバシーの不安を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_158",
    "name": "プライバシー - 高評価抽出",
    "description": "個人情報やプライバシーの不安を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_159",
    "name": "プライバシー - バズ投稿",
    "description": "個人情報やプライバシーの不安を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_160",
    "name": "プライバシー - 採用・転職",
    "description": "個人情報やプライバシーの不安を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_161",
    "name": "プライバシー - 炎上検知",
    "description": "個人情報やプライバシーの不安を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_162",
    "name": "プライバシー - トレンド分析",
    "description": "個人情報やプライバシーの不安を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_163",
    "name": "サステナ・ESG - エゴサーチ",
    "description": "サステナビリティ関連の反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_164",
    "name": "サステナ・ESG - 競合分析",
    "description": "サステナビリティ関連の反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (ESG OR サステナ OR 環境 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_165",
    "name": "サステナ・ESG - UX/不満抽出",
    "description": "サステナビリティ関連の反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_166",
    "name": "サステナ・ESG - 高評価抽出",
    "description": "サステナビリティ関連の反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_167",
    "name": "サステナ・ESG - バズ投稿",
    "description": "サステナビリティ関連の反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_168",
    "name": "サステナ・ESG - 採用・転職",
    "description": "サステナビリティ関連の反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_169",
    "name": "サステナ・ESG - 炎上検知",
    "description": "サステナビリティ関連の反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_170",
    "name": "サステナ・ESG - トレンド分析",
    "description": "サステナビリティ関連の反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_171",
    "name": "イベント反響 - エゴサーチ",
    "description": "イベント参加者の反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_172",
    "name": "イベント反響 - 競合分析",
    "description": "イベント参加者の反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (イベント OR 参加 OR 感想 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_173",
    "name": "イベント反響 - UX/不満抽出",
    "description": "イベント参加者の反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_174",
    "name": "イベント反響 - 高評価抽出",
    "description": "イベント参加者の反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_175",
    "name": "イベント反響 - バズ投稿",
    "description": "イベント参加者の反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_176",
    "name": "イベント反響 - 採用・転職",
    "description": "イベント参加者の反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_177",
    "name": "イベント反響 - 炎上検知",
    "description": "イベント参加者の反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_178",
    "name": "イベント反響 - トレンド分析",
    "description": "イベント参加者の反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_179",
    "name": "ハッシュタグ効果 - エゴサーチ",
    "description": "ハッシュタグの利用状況を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_180",
    "name": "ハッシュタグ効果 - 競合分析",
    "description": "ハッシュタグの利用状況を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_181",
    "name": "ハッシュタグ効果 - UX/不満抽出",
    "description": "ハッシュタグの利用状況を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_182",
    "name": "ハッシュタグ効果 - 高評価抽出",
    "description": "ハッシュタグの利用状況を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_183",
    "name": "ハッシュタグ効果 - バズ投稿",
    "description": "ハッシュタグの利用状況を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_184",
    "name": "ハッシュタグ効果 - 採用・転職",
    "description": "ハッシュタグの利用状況を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_185",
    "name": "ハッシュタグ効果 - 炎上検知",
    "description": "ハッシュタグの利用状況を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_186",
    "name": "ハッシュタグ効果 - トレンド分析",
    "description": "ハッシュタグの利用状況を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_187",
    "name": "公式アカウント - エゴサーチ",
    "description": "公式アカウントへの言及を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_188",
    "name": "公式アカウント - 競合分析",
    "description": "公式アカウントへの言及を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_189",
    "name": "公式アカウント - UX/不満抽出",
    "description": "公式アカウントへの言及を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_190",
    "name": "公式アカウント - 高評価抽出",
    "description": "公式アカウントへの言及を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_191",
    "name": "公式アカウント - バズ投稿",
    "description": "公式アカウントへの言及を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_192",
    "name": "公式アカウント - 採用・転職",
    "description": "公式アカウントへの言及を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_193",
    "name": "公式アカウント - 炎上検知",
    "description": "公式アカウントへの言及を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_194",
    "name": "公式アカウント - トレンド分析",
    "description": "公式アカウントへの言及を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_195",
    "name": "競合乗り換え - エゴサーチ",
    "description": "競合から/への乗り換え要因を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_196",
    "name": "競合乗り換え - 競合分析",
    "description": "競合から/への乗り換え要因を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (乗り換え OR 解約 OR やめた OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_197",
    "name": "競合乗り換え - UX/不満抽出",
    "description": "競合から/への乗り換え要因を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_198",
    "name": "競合乗り換え - 高評価抽出",
    "description": "競合から/への乗り換え要因を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_199",
    "name": "競合乗り換え - バズ投稿",
    "description": "競合から/への乗り換え要因を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_200",
    "name": "競合乗り換え - 採用・転職",
    "description": "競合から/への乗り換え要因を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_201",
    "name": "競合乗り換え - 炎上検知",
    "description": "競合から/への乗り換え要因を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_202",
    "name": "競合乗り換え - トレンド分析",
    "description": "競合から/への乗り換え要因を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_203",
    "name": "バズ兆候 - エゴサーチ",
    "description": "急拡散の兆候を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_204",
    "name": "バズ兆候 - 競合分析",
    "description": "急拡散の兆候を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (話題 OR 急増 OR 拡散 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_205",
    "name": "バズ兆候 - UX/不満抽出",
    "description": "急拡散の兆候を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_206",
    "name": "バズ兆候 - 高評価抽出",
    "description": "急拡散の兆候を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_207",
    "name": "バズ兆候 - バズ投稿",
    "description": "急拡散の兆候を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_208",
    "name": "バズ兆候 - 採用・転職",
    "description": "急拡散の兆候を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_209",
    "name": "バズ兆候 - 炎上検知",
    "description": "急拡散の兆候を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_210",
    "name": "バズ兆候 - トレンド分析",
    "description": "急拡散の兆候を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_211",
    "name": "機能要望 - エゴサーチ",
    "description": "ユーザーの機能要望を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_212",
    "name": "機能要望 - 競合分析",
    "description": "ユーザーの機能要望を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (欲しい OR 改善 OR 追加して OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_213",
    "name": "機能要望 - UX/不満抽出",
    "description": "ユーザーの機能要望を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_214",
    "name": "機能要望 - 高評価抽出",
    "description": "ユーザーの機能要望を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_215",
    "name": "機能要望 - バズ投稿",
    "description": "ユーザーの機能要望を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_216",
    "name": "機能要望 - 採用・転職",
    "description": "ユーザーの機能要望を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_217",
    "name": "機能要望 - 炎上検知",
    "description": "ユーザーの機能要望を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_218",
    "name": "機能要望 - トレンド分析",
    "description": "ユーザーの機能要望を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_219",
    "name": "不具合報告 - エゴサーチ",
    "description": "不具合報告を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_220",
    "name": "不具合報告 - 競合分析",
    "description": "不具合報告を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (不具合 OR バグ OR エラー OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_221",
    "name": "不具合報告 - UX/不満抽出",
    "description": "不具合報告を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_222",
    "name": "不具合報告 - 高評価抽出",
    "description": "不具合報告を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_223",
    "name": "不具合報告 - バズ投稿",
    "description": "不具合報告を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_224",
    "name": "不具合報告 - 採用・転職",
    "description": "不具合報告を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_225",
    "name": "不具合報告 - 炎上検知",
    "description": "不具合報告を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_226",
    "name": "不具合報告 - トレンド分析",
    "description": "不具合報告を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_227",
    "name": "神レビュー - エゴサーチ",
    "description": "強い高評価を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_228",
    "name": "神レビュー - 競合分析",
    "description": "強い高評価を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (神 OR 最高 OR 優勝 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_229",
    "name": "神レビュー - UX/不満抽出",
    "description": "強い高評価を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_230",
    "name": "神レビュー - 高評価抽出",
    "description": "強い高評価を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_231",
    "name": "神レビュー - バズ投稿",
    "description": "強い高評価を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_232",
    "name": "神レビュー - 採用・転職",
    "description": "強い高評価を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_233",
    "name": "神レビュー - 炎上検知",
    "description": "強い高評価を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_234",
    "name": "神レビュー - トレンド分析",
    "description": "強い高評価を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_235",
    "name": "リピート意向 - エゴサーチ",
    "description": "継続利用・再購入意向を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_236",
    "name": "リピート意向 - 競合分析",
    "description": "継続利用・再購入意向を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (リピート OR また買う OR 継続 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_237",
    "name": "リピート意向 - UX/不満抽出",
    "description": "継続利用・再購入意向を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_238",
    "name": "リピート意向 - 高評価抽出",
    "description": "継続利用・再購入意向を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_239",
    "name": "リピート意向 - バズ投稿",
    "description": "継続利用・再購入意向を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_240",
    "name": "リピート意向 - 採用・転職",
    "description": "継続利用・再購入意向を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_241",
    "name": "リピート意向 - 炎上検知",
    "description": "継続利用・再購入意向を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_242",
    "name": "リピート意向 - トレンド分析",
    "description": "継続利用・再購入意向を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_243",
    "name": "炎上早期警戒 - エゴサーチ",
    "description": "炎上の初期兆候を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_244",
    "name": "炎上早期警戒 - 競合分析",
    "description": "炎上の初期兆候を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (炎上 OR 謝罪 OR 批判 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_245",
    "name": "炎上早期警戒 - UX/不満抽出",
    "description": "炎上の初期兆候を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_246",
    "name": "炎上早期警戒 - 高評価抽出",
    "description": "炎上の初期兆候を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_247",
    "name": "炎上早期警戒 - バズ投稿",
    "description": "炎上の初期兆候を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_248",
    "name": "炎上早期警戒 - 採用・転職",
    "description": "炎上の初期兆候を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_249",
    "name": "炎上早期警戒 - 炎上検知",
    "description": "炎上の初期兆候を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_250",
    "name": "炎上早期警戒 - トレンド分析",
    "description": "炎上の初期兆候を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_251",
    "name": "日常使い満足度 - エゴサーチ",
    "description": "商品の日常利用における満足・不満を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_252",
    "name": "日常使い満足度 - 競合分析",
    "description": "商品の日常利用における満足・不満を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (日常 OR 毎日 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_253",
    "name": "日常使い満足度 - UX/不満抽出",
    "description": "商品の日常利用における満足・不満を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_254",
    "name": "日常使い満足度 - 高評価抽出",
    "description": "商品の日常利用における満足・不満を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_255",
    "name": "日常使い満足度 - バズ投稿",
    "description": "商品の日常利用における満足・不満を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_256",
    "name": "日常使い満足度 - 採用・転職",
    "description": "商品の日常利用における満足・不満を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_257",
    "name": "日常使い満足度 - 炎上検知",
    "description": "商品の日常利用における満足・不満を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_258",
    "name": "日常使い満足度 - トレンド分析",
    "description": "商品の日常利用における満足・不満を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_259",
    "name": "価格・コスパ - エゴサーチ",
    "description": "価格やコストパフォーマンスへの反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_260",
    "name": "価格・コスパ - 競合分析",
    "description": "価格やコストパフォーマンスへの反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (価格 OR コスパ OR 高い OR 安い OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_261",
    "name": "価格・コスパ - UX/不満抽出",
    "description": "価格やコストパフォーマンスへの反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_262",
    "name": "価格・コスパ - 高評価抽出",
    "description": "価格やコストパフォーマンスへの反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_263",
    "name": "価格・コスパ - バズ投稿",
    "description": "価格やコストパフォーマンスへの反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_264",
    "name": "価格・コスパ - 採用・転職",
    "description": "価格やコストパフォーマンスへの反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_265",
    "name": "価格・コスパ - 炎上検知",
    "description": "価格やコストパフォーマンスへの反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_266",
    "name": "価格・コスパ - トレンド分析",
    "description": "価格やコストパフォーマンスへの反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_267",
    "name": "新機能反応 - エゴサーチ",
    "description": "新機能やアップデートに対する反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_268",
    "name": "新機能反応 - 競合分析",
    "description": "新機能やアップデートに対する反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (新機能 OR アップデート OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_269",
    "name": "新機能反応 - UX/不満抽出",
    "description": "新機能やアップデートに対する反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_270",
    "name": "新機能反応 - 高評価抽出",
    "description": "新機能やアップデートに対する反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_271",
    "name": "新機能反応 - バズ投稿",
    "description": "新機能やアップデートに対する反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_272",
    "name": "新機能反応 - 採用・転職",
    "description": "新機能やアップデートに対する反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_273",
    "name": "新機能反応 - 炎上検知",
    "description": "新機能やアップデートに対する反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_274",
    "name": "新機能反応 - トレンド分析",
    "description": "新機能やアップデートに対する反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_275",
    "name": "キャンペーン反応 - エゴサーチ",
    "description": "キャンペーン施策への反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_276",
    "name": "キャンペーン反応 - 競合分析",
    "description": "キャンペーン施策への反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (キャンペーン OR セール OR クーポン OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_277",
    "name": "キャンペーン反応 - UX/不満抽出",
    "description": "キャンペーン施策への反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_278",
    "name": "キャンペーン反応 - 高評価抽出",
    "description": "キャンペーン施策への反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_279",
    "name": "キャンペーン反応 - バズ投稿",
    "description": "キャンペーン施策への反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_280",
    "name": "キャンペーン反応 - 採用・転職",
    "description": "キャンペーン施策への反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_281",
    "name": "キャンペーン反応 - 炎上検知",
    "description": "キャンペーン施策への反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_282",
    "name": "キャンペーン反応 - トレンド分析",
    "description": "キャンペーン施策への反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_283",
    "name": "サポート対応 - エゴサーチ",
    "description": "サポート品質への評価を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_284",
    "name": "サポート対応 - 競合分析",
    "description": "サポート品質への評価を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (サポート OR 問い合わせ OR 対応 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_285",
    "name": "サポート対応 - UX/不満抽出",
    "description": "サポート品質への評価を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_286",
    "name": "サポート対応 - 高評価抽出",
    "description": "サポート品質への評価を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_287",
    "name": "サポート対応 - バズ投稿",
    "description": "サポート品質への評価を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_288",
    "name": "サポート対応 - 採用・転職",
    "description": "サポート品質への評価を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_289",
    "name": "サポート対応 - 炎上検知",
    "description": "サポート品質への評価を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_290",
    "name": "サポート対応 - トレンド分析",
    "description": "サポート品質への評価を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_291",
    "name": "ログイン問題 - エゴサーチ",
    "description": "ログイン・認証関連の問題を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_292",
    "name": "ログイン問題 - 競合分析",
    "description": "ログイン・認証関連の問題を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (ログイン OR 認証 OR アカウント OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_293",
    "name": "ログイン問題 - UX/不満抽出",
    "description": "ログイン・認証関連の問題を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_294",
    "name": "ログイン問題 - 高評価抽出",
    "description": "ログイン・認証関連の問題を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_295",
    "name": "ログイン問題 - バズ投稿",
    "description": "ログイン・認証関連の問題を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_296",
    "name": "ログイン問題 - 採用・転職",
    "description": "ログイン・認証関連の問題を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_297",
    "name": "ログイン問題 - 炎上検知",
    "description": "ログイン・認証関連の問題を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_298",
    "name": "ログイン問題 - トレンド分析",
    "description": "ログイン・認証関連の問題を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_299",
    "name": "配送・納期 - エゴサーチ",
    "description": "配送や納期に関する問題を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_300",
    "name": "配送・納期 - 競合分析",
    "description": "配送や納期に関する問題を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (配送 OR 届かない OR 遅延 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_301",
    "name": "配送・納期 - UX/不満抽出",
    "description": "配送や納期に関する問題を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_302",
    "name": "配送・納期 - 高評価抽出",
    "description": "配送や納期に関する問題を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_303",
    "name": "配送・納期 - バズ投稿",
    "description": "配送や納期に関する問題を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_304",
    "name": "配送・納期 - 採用・転職",
    "description": "配送や納期に関する問題を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_305",
    "name": "配送・納期 - 炎上検知",
    "description": "配送や納期に関する問題を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_306",
    "name": "配送・納期 - トレンド分析",
    "description": "配送や納期に関する問題を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (配送 OR 届かない OR 遅延 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_307",
    "name": "アプリ動作 - エゴサーチ",
    "description": "アプリの安定性や不具合を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_308",
    "name": "アプリ動作 - 競合分析",
    "description": "アプリの安定性や不具合を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (アプリ OR エラー OR 落ちる OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_309",
    "name": "アプリ動作 - UX/不満抽出",
    "description": "アプリの安定性や不具合を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_310",
    "name": "アプリ動作 - 高評価抽出",
    "description": "アプリの安定性や不具合を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_311",
    "name": "アプリ動作 - バズ投稿",
    "description": "アプリの安定性や不具合を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_312",
    "name": "アプリ動作 - 採用・転職",
    "description": "アプリの安定性や不具合を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_313",
    "name": "アプリ動作 - 炎上検知",
    "description": "アプリの安定性や不具合を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_314",
    "name": "アプリ動作 - トレンド分析",
    "description": "アプリの安定性や不具合を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (アプリ OR エラー OR 落ちる OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_315",
    "name": "UIデザイン - エゴサーチ",
    "description": "UI/デザインへの評価を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_316",
    "name": "UIデザイン - 競合分析",
    "description": "UI/デザインへの評価を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (UI OR デザイン OR 見にくい OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_317",
    "name": "UIデザイン - UX/不満抽出",
    "description": "UI/デザインへの評価を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_318",
    "name": "UIデザイン - 高評価抽出",
    "description": "UI/デザインへの評価を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_319",
    "name": "UIデザイン - バズ投稿",
    "description": "UI/デザインへの評価を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_320",
    "name": "UIデザイン - 採用・転職",
    "description": "UI/デザインへの評価を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_321",
    "name": "UIデザイン - 炎上検知",
    "description": "UI/デザインへの評価を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_322",
    "name": "UIデザイン - トレンド分析",
    "description": "UI/デザインへの評価を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (UI OR デザイン OR 見にくい OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_323",
    "name": "レビュー・口コミ - エゴサーチ",
    "description": "レビュー・口コミ投稿を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_324",
    "name": "レビュー・口コミ - 競合分析",
    "description": "レビュー・口コミ投稿を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (レビュー OR 口コミ OR 評判 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_325",
    "name": "レビュー・口コミ - UX/不満抽出",
    "description": "レビュー・口コミ投稿を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_326",
    "name": "レビュー・口コミ - 高評価抽出",
    "description": "レビュー・口コミ投稿を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_327",
    "name": "レビュー・口コミ - バズ投稿",
    "description": "レビュー・口コミ投稿を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_328",
    "name": "レビュー・口コミ - 採用・転職",
    "description": "レビュー・口コミ投稿を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_329",
    "name": "レビュー・口コミ - 炎上検知",
    "description": "レビュー・口コミ投稿を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_330",
    "name": "レビュー・口コミ - トレンド分析",
    "description": "レビュー・口コミ投稿を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (レビュー OR 口コミ OR 評判 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_331",
    "name": "採用広報 - エゴサーチ",
    "description": "採用広報・選考体験の声を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_332",
    "name": "採用広報 - 競合分析",
    "description": "採用広報・選考体験の声を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (採用広報 OR 面接 OR 選考 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_333",
    "name": "採用広報 - UX/不満抽出",
    "description": "採用広報・選考体験の声を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_334",
    "name": "採用広報 - 高評価抽出",
    "description": "採用広報・選考体験の声を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_335",
    "name": "採用広報 - バズ投稿",
    "description": "採用広報・選考体験の声を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_336",
    "name": "採用広報 - 採用・転職",
    "description": "採用広報・選考体験の声を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_337",
    "name": "採用広報 - 炎上検知",
    "description": "採用広報・選考体験の声を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_338",
    "name": "採用広報 - トレンド分析",
    "description": "採用広報・選考体験の声を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (採用広報 OR 面接 OR 選考 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_339",
    "name": "退職・離職 - エゴサーチ",
    "description": "退職者・離職者の声を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_340",
    "name": "退職・離職 - 競合分析",
    "description": "退職者・離職者の声を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (退職 OR 辞めた OR 元社員 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_341",
    "name": "退職・離職 - UX/不満抽出",
    "description": "退職者・離職者の声を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_342",
    "name": "退職・離職 - 高評価抽出",
    "description": "退職者・離職者の声を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_343",
    "name": "退職・離職 - バズ投稿",
    "description": "退職者・離職者の声を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_344",
    "name": "退職・離職 - 採用・転職",
    "description": "退職者・離職者の声を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_345",
    "name": "退職・離職 - 炎上検知",
    "description": "退職者・離職者の声を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_346",
    "name": "退職・離職 - トレンド分析",
    "description": "退職者・離職者の声を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (退職 OR 辞めた OR 元社員 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_347",
    "name": "セキュリティ - エゴサーチ",
    "description": "セキュリティに関する懸念を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_348",
    "name": "セキュリティ - 競合分析",
    "description": "セキュリティに関する懸念を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (セキュリティ OR 漏洩 OR 脆弱 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_349",
    "name": "セキュリティ - UX/不満抽出",
    "description": "セキュリティに関する懸念を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_350",
    "name": "セキュリティ - 高評価抽出",
    "description": "セキュリティに関する懸念を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_351",
    "name": "セキュリティ - バズ投稿",
    "description": "セキュリティに関する懸念を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_352",
    "name": "セキュリティ - 採用・転職",
    "description": "セキュリティに関する懸念を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_353",
    "name": "セキュリティ - 炎上検知",
    "description": "セキュリティに関する懸念を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_354",
    "name": "セキュリティ - トレンド分析",
    "description": "セキュリティに関する懸念を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (セキュリティ OR 漏洩 OR 脆弱 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_355",
    "name": "プライバシー - エゴサーチ",
    "description": "個人情報やプライバシーの不安を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_356",
    "name": "プライバシー - 競合分析",
    "description": "個人情報やプライバシーの不安を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (プライバシー OR 個人情報 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_357",
    "name": "プライバシー - UX/不満抽出",
    "description": "個人情報やプライバシーの不安を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_358",
    "name": "プライバシー - 高評価抽出",
    "description": "個人情報やプライバシーの不安を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_359",
    "name": "プライバシー - バズ投稿",
    "description": "個人情報やプライバシーの不安を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_360",
    "name": "プライバシー - 採用・転職",
    "description": "個人情報やプライバシーの不安を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_361",
    "name": "プライバシー - 炎上検知",
    "description": "個人情報やプライバシーの不安を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_362",
    "name": "プライバシー - トレンド分析",
    "description": "個人情報やプライバシーの不安を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (プライバシー OR 個人情報 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_363",
    "name": "サステナ・ESG - エゴサーチ",
    "description": "サステナビリティ関連の反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_364",
    "name": "サステナ・ESG - 競合分析",
    "description": "サステナビリティ関連の反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (ESG OR サステナ OR 環境 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_365",
    "name": "サステナ・ESG - UX/不満抽出",
    "description": "サステナビリティ関連の反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_366",
    "name": "サステナ・ESG - 高評価抽出",
    "description": "サステナビリティ関連の反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_367",
    "name": "サステナ・ESG - バズ投稿",
    "description": "サステナビリティ関連の反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_368",
    "name": "サステナ・ESG - 採用・転職",
    "description": "サステナビリティ関連の反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_369",
    "name": "サステナ・ESG - 炎上検知",
    "description": "サステナビリティ関連の反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_370",
    "name": "サステナ・ESG - トレンド分析",
    "description": "サステナビリティ関連の反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ESG OR サステナ OR 環境 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_371",
    "name": "イベント反響 - エゴサーチ",
    "description": "イベント参加者の反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_372",
    "name": "イベント反響 - 競合分析",
    "description": "イベント参加者の反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (イベント OR 参加 OR 感想 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_373",
    "name": "イベント反響 - UX/不満抽出",
    "description": "イベント参加者の反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_374",
    "name": "イベント反響 - 高評価抽出",
    "description": "イベント参加者の反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_375",
    "name": "イベント反響 - バズ投稿",
    "description": "イベント参加者の反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_376",
    "name": "イベント反響 - 採用・転職",
    "description": "イベント参加者の反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_377",
    "name": "イベント反響 - 炎上検知",
    "description": "イベント参加者の反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_378",
    "name": "イベント反響 - トレンド分析",
    "description": "イベント参加者の反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (イベント OR 参加 OR 感想 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_379",
    "name": "ハッシュタグ効果 - エゴサーチ",
    "description": "ハッシュタグの利用状況を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_380",
    "name": "ハッシュタグ効果 - 競合分析",
    "description": "ハッシュタグの利用状況を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_381",
    "name": "ハッシュタグ効果 - UX/不満抽出",
    "description": "ハッシュタグの利用状況を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_382",
    "name": "ハッシュタグ効果 - 高評価抽出",
    "description": "ハッシュタグの利用状況を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_383",
    "name": "ハッシュタグ効果 - バズ投稿",
    "description": "ハッシュタグの利用状況を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_384",
    "name": "ハッシュタグ効果 - 採用・転職",
    "description": "ハッシュタグの利用状況を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_385",
    "name": "ハッシュタグ効果 - 炎上検知",
    "description": "ハッシュタグの利用状況を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_386",
    "name": "ハッシュタグ効果 - トレンド分析",
    "description": "ハッシュタグの利用状況を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "#タグ",
    "query_template": "{hashtag} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_387",
    "name": "公式アカウント - エゴサーチ",
    "description": "公式アカウントへの言及を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_388",
    "name": "公式アカウント - 競合分析",
    "description": "公式アカウントへの言及を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_389",
    "name": "公式アカウント - UX/不満抽出",
    "description": "公式アカウントへの言及を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_390",
    "name": "公式アカウント - 高評価抽出",
    "description": "公式アカウントへの言及を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_391",
    "name": "公式アカウント - バズ投稿",
    "description": "公式アカウントへの言及を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_392",
    "name": "公式アカウント - 採用・転職",
    "description": "公式アカウントへの言及を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_393",
    "name": "公式アカウント - 炎上検知",
    "description": "公式アカウントへの言及を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_394",
    "name": "公式アカウント - トレンド分析",
    "description": "公式アカウントへの言及を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "@account",
    "query_template": "{account} lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_395",
    "name": "競合乗り換え - エゴサーチ",
    "description": "競合から/への乗り換え要因を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_396",
    "name": "競合乗り換え - 競合分析",
    "description": "競合から/への乗り換え要因を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (乗り換え OR 解約 OR やめた OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_397",
    "name": "競合乗り換え - UX/不満抽出",
    "description": "競合から/への乗り換え要因を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_398",
    "name": "競合乗り換え - 高評価抽出",
    "description": "競合から/への乗り換え要因を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_399",
    "name": "競合乗り換え - バズ投稿",
    "description": "競合から/への乗り換え要因を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_400",
    "name": "競合乗り換え - 採用・転職",
    "description": "競合から/への乗り換え要因を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_401",
    "name": "競合乗り換え - 炎上検知",
    "description": "競合から/への乗り換え要因を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_402",
    "name": "競合乗り換え - トレンド分析",
    "description": "競合から/への乗り換え要因を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (乗り換え OR 解約 OR やめた OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_403",
    "name": "バズ兆候 - エゴサーチ",
    "description": "急拡散の兆候を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_404",
    "name": "バズ兆候 - 競合分析",
    "description": "急拡散の兆候を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (話題 OR 急増 OR 拡散 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_405",
    "name": "バズ兆候 - UX/不満抽出",
    "description": "急拡散の兆候を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_406",
    "name": "バズ兆候 - 高評価抽出",
    "description": "急拡散の兆候を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_407",
    "name": "バズ兆候 - バズ投稿",
    "description": "急拡散の兆候を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_408",
    "name": "バズ兆候 - 採用・転職",
    "description": "急拡散の兆候を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_409",
    "name": "バズ兆候 - 炎上検知",
    "description": "急拡散の兆候を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_410",
    "name": "バズ兆候 - トレンド分析",
    "description": "急拡散の兆候を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (話題 OR 急増 OR 拡散 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_411",
    "name": "機能要望 - エゴサーチ",
    "description": "ユーザーの機能要望を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_412",
    "name": "機能要望 - 競合分析",
    "description": "ユーザーの機能要望を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (欲しい OR 改善 OR 追加して OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_413",
    "name": "機能要望 - UX/不満抽出",
    "description": "ユーザーの機能要望を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_414",
    "name": "機能要望 - 高評価抽出",
    "description": "ユーザーの機能要望を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_415",
    "name": "機能要望 - バズ投稿",
    "description": "ユーザーの機能要望を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_416",
    "name": "機能要望 - 採用・転職",
    "description": "ユーザーの機能要望を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_417",
    "name": "機能要望 - 炎上検知",
    "description": "ユーザーの機能要望を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_418",
    "name": "機能要望 - トレンド分析",
    "description": "ユーザーの機能要望を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (欲しい OR 改善 OR 追加して OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_419",
    "name": "不具合報告 - エゴサーチ",
    "description": "不具合報告を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_420",
    "name": "不具合報告 - 競合分析",
    "description": "不具合報告を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (不具合 OR バグ OR エラー OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_421",
    "name": "不具合報告 - UX/不満抽出",
    "description": "不具合報告を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_422",
    "name": "不具合報告 - 高評価抽出",
    "description": "不具合報告を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_423",
    "name": "不具合報告 - バズ投稿",
    "description": "不具合報告を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_424",
    "name": "不具合報告 - 採用・転職",
    "description": "不具合報告を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_425",
    "name": "不具合報告 - 炎上検知",
    "description": "不具合報告を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_426",
    "name": "不具合報告 - トレンド分析",
    "description": "不具合報告を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (不具合 OR バグ OR エラー OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_427",
    "name": "神レビュー - エゴサーチ",
    "description": "強い高評価を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_428",
    "name": "神レビュー - 競合分析",
    "description": "強い高評価を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (神 OR 最高 OR 優勝 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_429",
    "name": "神レビュー - UX/不満抽出",
    "description": "強い高評価を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_430",
    "name": "神レビュー - 高評価抽出",
    "description": "強い高評価を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_431",
    "name": "神レビュー - バズ投稿",
    "description": "強い高評価を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_432",
    "name": "神レビュー - 採用・転職",
    "description": "強い高評価を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_433",
    "name": "神レビュー - 炎上検知",
    "description": "強い高評価を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_434",
    "name": "神レビュー - トレンド分析",
    "description": "強い高評価を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (神 OR 最高 OR 優勝 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_435",
    "name": "リピート意向 - エゴサーチ",
    "description": "継続利用・再購入意向を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_436",
    "name": "リピート意向 - 競合分析",
    "description": "継続利用・再購入意向を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (リピート OR また買う OR 継続 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_437",
    "name": "リピート意向 - UX/不満抽出",
    "description": "継続利用・再購入意向を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_438",
    "name": "リピート意向 - 高評価抽出",
    "description": "継続利用・再購入意向を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_439",
    "name": "リピート意向 - バズ投稿",
    "description": "継続利用・再購入意向を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_440",
    "name": "リピート意向 - 採用・転職",
    "description": "継続利用・再購入意向を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_441",
    "name": "リピート意向 - 炎上検知",
    "description": "継続利用・再購入意向を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_442",
    "name": "リピート意向 - トレンド分析",
    "description": "継続利用・再購入意向を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (リピート OR また買う OR 継続 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_443",
    "name": "炎上早期警戒 - エゴサーチ",
    "description": "炎上の初期兆候を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_444",
    "name": "炎上早期警戒 - 競合分析",
    "description": "炎上の初期兆候を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (炎上 OR 謝罪 OR 批判 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_445",
    "name": "炎上早期警戒 - UX/不満抽出",
    "description": "炎上の初期兆候を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_446",
    "name": "炎上早期警戒 - 高評価抽出",
    "description": "炎上の初期兆候を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_447",
    "name": "炎上早期警戒 - バズ投稿",
    "description": "炎上の初期兆候を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_448",
    "name": "炎上早期警戒 - 採用・転職",
    "description": "炎上の初期兆候を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_449",
    "name": "炎上早期警戒 - 炎上検知",
    "description": "炎上の初期兆候を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_450",
    "name": "炎上早期警戒 - トレンド分析",
    "description": "炎上の初期兆候を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (炎上 OR 謝罪 OR 批判 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_451",
    "name": "日常使い満足度 - エゴサーチ",
    "description": "商品の日常利用における満足・不満を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_452",
    "name": "日常使い満足度 - 競合分析",
    "description": "商品の日常利用における満足・不満を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (日常 OR 毎日 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_453",
    "name": "日常使い満足度 - UX/不満抽出",
    "description": "商品の日常利用における満足・不満を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_454",
    "name": "日常使い満足度 - 高評価抽出",
    "description": "商品の日常利用における満足・不満を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_455",
    "name": "日常使い満足度 - バズ投稿",
    "description": "商品の日常利用における満足・不満を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_456",
    "name": "日常使い満足度 - 採用・転職",
    "description": "商品の日常利用における満足・不満を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_457",
    "name": "日常使い満足度 - 炎上検知",
    "description": "商品の日常利用における満足・不満を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_458",
    "name": "日常使い満足度 - トレンド分析",
    "description": "商品の日常利用における満足・不満を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (日常 OR 毎日 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_459",
    "name": "価格・コスパ - エゴサーチ",
    "description": "価格やコストパフォーマンスへの反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_460",
    "name": "価格・コスパ - 競合分析",
    "description": "価格やコストパフォーマンスへの反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (価格 OR コスパ OR 高い OR 安い OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_461",
    "name": "価格・コスパ - UX/不満抽出",
    "description": "価格やコストパフォーマンスへの反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_462",
    "name": "価格・コスパ - 高評価抽出",
    "description": "価格やコストパフォーマンスへの反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_463",
    "name": "価格・コスパ - バズ投稿",
    "description": "価格やコストパフォーマンスへの反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_464",
    "name": "価格・コスパ - 採用・転職",
    "description": "価格やコストパフォーマンスへの反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_465",
    "name": "価格・コスパ - 炎上検知",
    "description": "価格やコストパフォーマンスへの反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_466",
    "name": "価格・コスパ - トレンド分析",
    "description": "価格やコストパフォーマンスへの反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (価格 OR コスパ OR 高い OR 安い OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_467",
    "name": "新機能反応 - エゴサーチ",
    "description": "新機能やアップデートに対する反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_468",
    "name": "新機能反応 - 競合分析",
    "description": "新機能やアップデートに対する反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (新機能 OR アップデート OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_469",
    "name": "新機能反応 - UX/不満抽出",
    "description": "新機能やアップデートに対する反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_470",
    "name": "新機能反応 - 高評価抽出",
    "description": "新機能やアップデートに対する反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_471",
    "name": "新機能反応 - バズ投稿",
    "description": "新機能やアップデートに対する反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_472",
    "name": "新機能反応 - 採用・転職",
    "description": "新機能やアップデートに対する反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_473",
    "name": "新機能反応 - 炎上検知",
    "description": "新機能やアップデートに対する反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_474",
    "name": "新機能反応 - トレンド分析",
    "description": "新機能やアップデートに対する反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (新機能 OR アップデート OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_475",
    "name": "キャンペーン反応 - エゴサーチ",
    "description": "キャンペーン施策への反応を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_476",
    "name": "キャンペーン反応 - 競合分析",
    "description": "キャンペーン施策への反応を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (キャンペーン OR セール OR クーポン OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_477",
    "name": "キャンペーン反応 - UX/不満抽出",
    "description": "キャンペーン施策への反応を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_478",
    "name": "キャンペーン反応 - 高評価抽出",
    "description": "キャンペーン施策への反応を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_479",
    "name": "キャンペーン反応 - バズ投稿",
    "description": "キャンペーン施策への反応を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_480",
    "name": "キャンペーン反応 - 採用・転職",
    "description": "キャンペーン施策への反応を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_481",
    "name": "キャンペーン反応 - 炎上検知",
    "description": "キャンペーン施策への反応を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_482",
    "name": "キャンペーン反応 - トレンド分析",
    "description": "キャンペーン施策への反応を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (キャンペーン OR セール OR クーポン OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_483",
    "name": "サポート対応 - エゴサーチ",
    "description": "サポート品質への評価を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_484",
    "name": "サポート対応 - 競合分析",
    "description": "サポート品質への評価を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (サポート OR 問い合わせ OR 対応 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_485",
    "name": "サポート対応 - UX/不満抽出",
    "description": "サポート品質への評価を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_486",
    "name": "サポート対応 - 高評価抽出",
    "description": "サポート品質への評価を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_487",
    "name": "サポート対応 - バズ投稿",
    "description": "サポート品質への評価を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_488",
    "name": "サポート対応 - 採用・転職",
    "description": "サポート品質への評価を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_489",
    "name": "サポート対応 - 炎上検知",
    "description": "サポート品質への評価を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_490",
    "name": "サポート対応 - トレンド分析",
    "description": "サポート品質への評価を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (サポート OR 問い合わせ OR 対応 OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_491",
    "name": "ログイン問題 - エゴサーチ",
    "description": "ログイン・認証関連の問題を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_492",
    "name": "ログイン問題 - 競合分析",
    "description": "ログイン・認証関連の問題を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (ログイン OR 認証 OR アカウント OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_493",
    "name": "ログイン問題 - UX/不満抽出",
    "description": "ログイン・認証関連の問題を確認（UX/不満抽出向け）",
    "tags": [
      "UX/不満抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 不満 OR 使いにくい OR できない OR バグ) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_494",
    "name": "ログイン問題 - 高評価抽出",
    "description": "ログイン・認証関連の問題を確認（高評価抽出向け）",
    "tags": [
      "高評価抽出"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 最高 OR 神 OR おすすめ OR 買ってよかった) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_495",
    "name": "ログイン問題 - バズ投稿",
    "description": "ログイン・認証関連の問題を確認（バズ投稿向け）",
    "tags": [
      "バズ投稿"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント) lang:ja min_faves:300 -bot"
  },
  {
    "id": "preset_496",
    "name": "ログイン問題 - 採用・転職",
    "description": "ログイン・認証関連の問題を確認（採用・転職向け）",
    "tags": [
      "採用・転職"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 採用 OR 転職 OR 求人 OR 働き方) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_497",
    "name": "ログイン問題 - 炎上検知",
    "description": "ログイン・認証関連の問題を確認（炎上検知向け）",
    "tags": [
      "炎上検知"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 最悪 OR 返金 OR 詐欺 OR 炎上 OR 苦情) lang:ja min_faves:20 -filter:retweets -bot"
  },
  {
    "id": "preset_498",
    "name": "ログイン問題 - トレンド分析",
    "description": "ログイン・認証関連の問題を確認（トレンド分析向け）",
    "tags": [
      "トレンド分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} (ログイン OR 認証 OR アカウント OR 話題 OR トレンド OR 最新) lang:ja -filter:retweets -bot"
  },
  {
    "id": "preset_499",
    "name": "配送・納期 - エゴサーチ",
    "description": "配送や納期に関する問題を確認（エゴサーチ向け）",
    "tags": [
      "エゴサーチ"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{keyword} lang:ja -bot -プレゼント -キャンペーン"
  },
  {
    "id": "preset_500",
    "name": "配送・納期 - 競合分析",
    "description": "配送や納期に関する問題を確認（競合分析向け）",
    "tags": [
      "競合分析"
    ],
    "input_placeholder": "ブランド名・商品名・キーワード",
    "query_template": "{competitor} (配送 OR 届かない OR 遅延 OR 評判 OR 比較 OR 口コミ) lang:ja -filter:retweets -bot"
  }
];
