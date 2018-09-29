import React from 'react';

class SassScssPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="testsass testscss">
          測試react整合sass、scss！本列樣式由scss紅色背景、sass黃字組成。<br />
        </div>
        <div>
          使用React官方文件說明之：node-sass-chokidar，他會將所有.scss、.sass轉成.css檔案<br/>
          如無需生成.css的檔案可以在.scss或.sass檔案前面添加_<br />
          如本專案只有一個檔案需要生成.css<br />
          /src/style/core/_core.scss<br />
          /src/style/core/_testSass.sass<br />
          /src/style/core/_testScss.scss<br />
          /src/style/style.scss (因為檔名前面沒有加_，所以只有此檔案會生成.css檔案)<br />
        </div>
      </div>
    );
  }
}
export default SassScssPage;
