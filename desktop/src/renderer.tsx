import {render, version} from 'inferno';
import Component from 'inferno-component';

export class MyComponent extends Component < any, any > {
  private tsxVersion: string;

  constructor(props: any, context: any) {
    super(props, context);
    this.tsxVersion = '2.2.1';
    console.log('wtf');
  }

  render() {
    return (
      <div>
        <h1>{`Welcome to Inferno ${version} TSX ${this.tsxVersion}`} dude</h1>
      </div>
    );
  }
}
setTimeout(() => render(<MyComponent/>, document.getElementById('app')), 2000);
console.log(document.getElementById('app'));
