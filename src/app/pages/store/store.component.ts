import { Component } from '@angular/core';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

@Component({
  selector: 'tr-store',
  standalone: true,
  imports: [],
  templateUrl: './store.component.html',
})
export class StoreComponent {
  client = new DynamoDBClient({
    region: 'af-south-1',
    credentials: fromCognitoIdentityPool({
      clientConfig: { region: 'af-south-1' }, // Configure the underlying CognitoIdentityClient.
      identityPoolId: 'af-south-1:2d19ca7b-95e7-4f1f-a116-283936990f1d',
    }),
  });
  docClient = DynamoDBDocumentClient.from(this.client);

  products: any[] = JSON.parse(localStorage.getItem('products') || '');

  async getAll() {
    const scan = new ScanCommand({
      TableName: 'Product',
    });
    const response = await this.docClient.send(scan);
    this.products = response.Items as any[];
    localStorage.setItem('products', JSON.stringify(this.products));

    console.log(response);
  }

  async add() {
    const item = new PutCommand({
      TableName: 'Product',
      Item: {
        timestamp: Date.now().toString(),
        name: 'Shoes',
        color: 'White',
        brand: 'Adidas',
      },
    });
    await this.docClient.send(item);
    this.getAll();
  }
}
